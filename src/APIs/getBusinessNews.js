import axios from "axios"
const businessNewsAPI = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5497647da2114041ad647eba8e002d6f'
let data = null 
export const getBusinessNews = async () => {

    await axios.get(`${businessNewsAPI}`)
    .then(res=>{
        console.log(res.data)
        data = res.data.articles
    })
    .catch(err=>{
            console.log(err)

    })

    return data 

}