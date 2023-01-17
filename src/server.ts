//TypeScript -> JavaScript
//TypeScript = Possui uma tipagem estática. Ele analisa o código (possíveis erros) antes de para o ar.

import Fastify from 'fastify'
import cors from '@fastify/cors'
import { Prisma, PrismaClient } from '@prisma/client' //importando o banco de dados

const app = Fastify()
const prisma = new PrismaClient() //instanciando o banco de dados

app.register(cors)

/**
 * Método HTTP: Get (Quando vai buscar alguma informação, buscar algum dado do banco de dados), 
 * Post (Quando será criado algo), 
 * Put (Atualizar um recurso por completo),
 * Patch (Atualizar informação especifíca), 
 * Delete (Deletar um recurso no back-end)
 */

app.get('/', async () => {
    const habits = await prisma.habit.findMany({ //procurar na tabela habits
        where: { //onde
            title: { // o titulo
                startsWith: 'Beber' //comece com 'Beber'
            }
        }
    })

    return habits
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server running!') //vai ficar executando para mostrar que o servidor está rodando
})