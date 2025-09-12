import barbies from "../models/dados.js";

export const getAllBarbies = (req, res) => {
    res.json(barbies);
};

export const getBarbiesById = (req, res) => {
    const id = parseInt(req.params.id);
    const barbie = barbies.find(b => b.id === id);

    if (!barbie) {
        return res.status(404).json({ message: "Barbie não encontrada"});
    }

    res.json(barbie);
};

export const create = (req, res) => {
    const { nome, profisao, anoLancamento } = req.body;

    if (!nome || !profissao || !anoLancamento) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }

    const novaBarbie = {
        id: barbies.length + 1,
        nome,
        profissao,
        anoLancamento
    };

    barbies.push(novaBarbie);
    res.status(201).json(novaBarbie);
};

export const remove =(req, res) => {
    const id = parseInt(req.params.id);
    const index = barbies.findIndex(b => b.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Barbie não encontrada"});
}

const barbieRemovida = barbies.splice(index, 1);
res.json({ message: "Barbie removida com sucesso", barbie: barbieRemovida });
};