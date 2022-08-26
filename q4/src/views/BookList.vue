<template>
    <div class="header">
        <h1 class="title">Top books of all time</h1>
        <div class="d-flex justify-content-end mb-10">
            <input type="text" class="search" placeholder="Search ... " v-model="searchKey">
        </div>
    </div>
    <BookView v-for='(book, index) in displayArticles ' :key='index' :flag='index' :author='book.author'
        :rating='book.rating' :slug='book.slug' :synopsis='book.synopsis' :title='book.title' :upvoted='book.upvoted'
        :upvotes='book.upvotes' :cover='book.cover' />
    <div class="footer">
        <ul class="pagination">
            <li class="active" v-for="pageNumber in setArticles" :key="pageNumber" @click="page = pageNumber">
                <a href="#!">{{ pageNumber }}</a>
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import BookView from '../components/BookView.vue'
import { Options, Vue } from 'vue-class-component'
import { APISettings } from '@/api/config'

interface IArticle {
    author: string,
    cover: string,
    rating: string,
    slug: string,
    synopsis: string,
    title: string,
    upvoted: boolean,
    upvotes: number
}

@Options({
    components: {
        BookView
    }
})

export default class BookList extends Vue {
    searchKey: string = ''
    articles: Array<IArticle> = []
    page: number = 1
    perPage: number = 5
    pages: Array<number> = []

    async created(): Promise<void> {
        await this.fetchData()
        this.setArticles
    }
    fetchData() {
        return fetch(APISettings.baseURL + '/books', {
            method: 'GET',
            headers: APISettings.headers
        })
            .then(function (response) {
                if (response.status != 200) {
                    throw response.status;
                } else {
                    return response.json();
                }
            })
            .then(json => {
                this.articles = json.books;
            })
    }
    pagination(entries: object[]) {
        let page: number = this.page,
            perPage: number = this.perPage,
            from: number = (this.page * this.perPage) - this.perPage,
            to: number = page * perPage;
        return entries.slice(from, to);
    }
    get setArticles(): Array<any> {
        let numberOfPages: number = Math.ceil(this.filteredList.length / this.perPage);
        let pages: Array<any> = [];
        for (let i: number = 1; i <= numberOfPages; i++) {
            pages.push(i);
        }
        return this.pages = pages;
    }
    get filteredList(): Array<object> {
        let articles: Array<IArticle> = this.articles;
        let article: Array<any>;
        this.page = 1;
        return articles.filter(article => {
            return article.title.toLowerCase().includes(this.searchKey.toLowerCase())
        })
    }
    get displayArticles(): object[] {
        return this.pagination(this.filteredList)
    }
}
</script>
<style scoped lang="scss">
.header {
    background-color: #fafaf3;
    padding: 20px 0 0 0;

    .title {
        text-align: center;
        color: #deac48;
        margin-bottom: 10px;
    }
}

.footer {
    display: flex;
    justify-content: center;
    background-color: #fafaf3;

    .pagination {
        padding: 0;

        li.active {
            display: inline-block;
            border-radius: 2px;
            text-align: center;
            vertical-align: top;
            height: 30px;
            margin: 0 3px;
            background-color: #ee6e73;

            a {
                color: #444;
                display: inline-block;
                font-size: 0.8rem;
                padding: 0 10px;
                line-height: 30px;
                margin: 0 2px;
            }
        }
    }
}

.d-flex {
    display: flex;
}

.mb-10 {
    margin-bottom: 10px;
}

.justify-content-end {
    justify-content: end;
    align-items: center;

    label {
        font-size: 1rem;
    }

    input.search {
        border: 0.3px solid #fafa13;
        background-color: #fafaf3;
        font-size: 1rem;
        margin: 0 20px 10px 20px;
        width: 200px;
        height: 25px;
        border-radius: 3px;
    }
}

@media only screen and ( max-width : 600px ) {
    .search {
        width: 80% !important;
        padding: 5px 10px 0px 10px;
        margin-bottom: 10px!important;
    }
}
</style>