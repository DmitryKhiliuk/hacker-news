import axios from "axios";

const instance = axios.create({
    baseURL:'https://hacker-news.firebaseio.com/v0/'
})

export const newsAPI = {
    getNews() {
        return instance.get('newstories.json?print=pretty')
    },
    getTopNews() {
        return instance.get('topstories.json?print=pretty')
    },
    getBestNews() {
        return instance.get('beststories.json?print=pretty')
    },
    getStory(id:number) {
        return instance.get(`item/${id}.json?print=pretty`)
    }
}