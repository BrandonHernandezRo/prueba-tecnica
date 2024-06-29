import axios, { AxiosResponse } from "axios";

export async function getData(url: string): Promise<any> {
    try {
        const response: AxiosResponse<any> = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("No existe ese pokémon:", error);
        return null;
    }
}