import Axios from 'axios';

const production = process.env.NODE_ENV === 'production';

let baseURL = 'http://localhost:3000';
if (production) {
  baseURL = 'http://202.144.193.225:3000';
}

const axios = Axios.create({
  baseURL,
});

function getCards(id, params) {
  return axios.get(`/decks/${id}/cards`, { params });
}
function getRandomCards(id, size = 10) {
  return axios.get(`/decks/${id}/random-cards?size=${size}`);
}

function createCard(id, body) {
  return axios.post(`/decks/${id}/cards`, body);
}

function updateCard(deckId, cardId, body) {
  return axios.put(`/decks/${deckId}/cards/${cardId}`, body);
}

function removeCard(deckId, cardId) {
  return axios.delete(`/decks/${deckId}/cards/${cardId}`);
}

function removeCards(option) {
  return axios.delete('/cards', option);
}
function getDecks() {
  return axios.get('/decks');
}
function createDeck(data) {
  return axios.post('/decks', data);
}
function updateDeck(id, data) {
  return axios.put('/decks/' + id, data);
}
function deleteDeck(id) {
  return axios.delete('/decks/' + id);
}

function createTag(body) {
  return axios.post('/v2/tags', body)
}

function getTags() {
  return axios.get('/v2/tags')
}
function deleteTag(id) {
  return axios.delete(`/v2/tags/${id}`);
}
function updateTag(id, body) {
  return axios.put(`/v2/tags/${id}`, body)
}

export default {
  getCards,
  getRandomCards,
  createCard,
  updateCard,
  removeCard,
  removeCards,

  getDecks,
  createDeck,
  updateDeck,
  deleteDeck,

  getTags,
  createTag,
  updateTag,
  deleteTag,
};
