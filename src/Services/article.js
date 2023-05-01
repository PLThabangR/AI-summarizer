import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

 {/*This is an API which extracts news/article body from a URL and uses GPT to summarize the article content*/ }

const  rapidApiKey= import.meta.env.VITE_RAPI_API_KEY;
  
export const articleApi =createApi({

    reducerPath:'articleApi',
   
    baseQuery:fetchBaseQuery({
        baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders:(headers) => {
            headers.set('X-RapidAPI-Key',rapidApiKey);
            headers.set('X-RapidAPI-Host','article-extractor-and-summarizer.p.rapidapi.com');
            return headers;
        }
    }),
    endpoints: (builder)=> ({
        getSummary:builder.query({
            query:(params) =>`/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`})
    })
});

export const {useLazyGetSummaryQuery} = articleApi;