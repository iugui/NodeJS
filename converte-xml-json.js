/*
    *Esse programa converte um arquivo XML em objeto JSON
    
    Passo 1) Criando o package.json
        npm init -y
    Passo 2) Adicionando o "type":"module" no aquivo package.json
    Passo 3) Instaler o XMLParser
        npm install --save fast-xml-parser
*/

// imports
import {readFileSync} from 'fs'; // Para ler arquivos
import { XMLValidator } from 'fast-xml-parser'; // Para validar XML
import {XMLParser} from 'fast-xml-parser'; // Para converter XML para json

function converteXML2JSON(url){
    // Essa função le um XML de um arquivo e retorna um JSON
    const xmlString = readFileSync(url,"utf-8");
    const resultado = XMLValidator.validate(xmlString);
    if (resultado === true){
        // Então o arquivo XML é valido
        const parser = new XMLParser();
        const json = parser.parse(xmlString);
        return (json);
    } else{
        console.log(`O arquivo XML é inválido porque: ${resultado.err}`);
        return undefined;
    }
}

// Mude aqui conforme a sua necessidade
const url = "./livros.xml";
const objLivros = converteXML2JSON(url);
// Agora temos um objeto JS e podemos manipulá-lo a vontade :)

if (objLivros !== undefined){
    // Imprimindo os autores
    const livros = objLivros.catalog.book; // Retorna um vetor de objetos contendo todos os livros
    livros.map(function(livro,indice){
        console.log(`Livro: ${indice} - Autor: ${livro.author}`);
    })
} else{
    console.log("Não foi possível ler o arquivo");
}



