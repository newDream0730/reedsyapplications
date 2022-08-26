<template>
    <div class="board">
        <div class="header">
            <div>
                <div class="title">{{ article.title }}</div>
                <p><em>{{ article.author }}</em></p>
            </div>
            <div class="upvote">
                <label for="">Upvoted {{ article.upvotes }} times</label>
                <div v-if="article.upvoted == false" class="btn-upvote">Upvote</div>
                <div v-if="article.upvoted == true" class="btn-upvoted">Upvoted</div>
            </div>
        </div>
        <div class="logo">
            <img class="img" :src="imgUrl" alt="">
        </div>
        <div class="content">
            <h1>Synopsis</h1>
            <p>{{ article.synopsis }}</p>
            <div>
                <h5>Rating: {{ article.rating }}/10</h5>
                <h5><router-link to="/">Back</router-link></h5>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
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

export default defineComponent({
    data() {
        return {
            article: {} as IArticle
        }
    },
    async created(): Promise<void> {
        let slug : string | string[] = this.$route.params.slug;
        this.fetchData(slug)
    },
    methods: {
        fetchData(slug: string|string[]): any {
            return fetch(APISettings.baseURL + '/books/' + slug, {
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
                    this.article = json;
                })
        }
    },
    computed: {
        imgUrl(): any {
            return this.article.cover.replace('DESKTOP-DF4VDR6', 'localhost')
        }
    }
})
</script>
<style scoped lang="scss">
.board {
    padding: 20px;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        div>div.title {
            font-size: 1.7rem;
            font-weight: bold;
            color: #aa7823;
        }

        div>p {
            margin: 0;
        }

        div.upvote {
            display: flex;
            justify-content: end;
            align-items: center;
            font-size: 0.8rem;

            .btn-upvote {
                border: 1px solid gold;
                border-radius: 7px;
                padding: 5px 11px;
                margin-left: 20px;
                cursor: pointer;
            }
            .btn-upvoted {
                border: 1px solid gold;
                background-color: gold;
                color: white;
                border-radius: 7px;
                padding: 5px 11px;
                margin-left: 20px;
                cursor: pointer;
            }
        }
    }

    .logo {
        display: flex;
        justify-content: center;

        .img {
            border-radius: 10px;
            width: 50%;
            object-fit: contain;
        }
    }
    .content {
        div {
            display: flex;
            justify-content: space-between;
            padding: 0 20px 0 0;
        }
    }
}
</style>