import {useEffect, useState} from 'react'
import axios from 'axios'

const NewsFeed = () => {
    const [articles, setArticles] = useState(null)

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://cryptobackendbynaitik.herokuapp.com/news'
        }

        axios.request(options).then((response) => {
            console.log(response.data)
            setArticles(response.data)

        }).catch((error) => {
            console.error(error)
        })
    }, [])

    console.log(articles)

    const first7Articles = articles?.slice(0,7)

    return (
        <div className="news-feed">
            <h2 className='newss'>News Feed</h2>
            {first7Articles?.map((article, _index) => (
                <div key={_index}>
                    <a className='anchor' href={article.url} target='_blank'><p className='news'>{article.title}</p></a>
                </div>))}
        </div>
    )
}

export default NewsFeed
