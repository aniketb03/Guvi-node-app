import { client } from "../index.js";

export async function updateMovieById(id, data) {
    return await client.db("guvi-node-router")
        .collection("movies")
        .updateOne({ id: id }, { $set: data });
}
export async function deleteMoviesById(id) {
    return await client.db("guvi-node-router")
        .collection("movies")
        .deleteOne({ id: id });
}
export async function createMovies(data) {
    return await client.db("guvi-node-router")
        .collection("movies")
        .insertMany(data);
}
export async function getMoviesById(id) {
    return await client.db("guvi-node-router")
        .collection("movies")
        .findOne({ id: id });
}
export async function getAllMovies(request) {
    return await client.db("guvi-node-router")
        .collection("movies")
        .find(request.query).toArray();
}
