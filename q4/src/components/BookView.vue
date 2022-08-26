<template>
    <div :style="boardStyle">
        <div class="display">
            <div class="content">
                <div>
                    <span>
                        <router-link class="color" :to="{ name: 'individual', params: { slug: slug } }">
                            {{ flag + 1 }} {{ title }}
                        </router-link>
                    </span>
                    ({{ rating }}/10)
                </div>
                <p><em>{{ author }}</em></p>
                <p>{{ reduced }}</p>
                <div class="vote">
                    <div v-if="upvoted" class="btn upvoted">Upvoted</div>
                    <div v-else class="btn upvote">Upvote</div>
                    <p>Upvoted {{ upvotes }} times</p>
                </div>
            </div>
            <div class="logo">
                <router-link :to="{ name: 'individual', params: { slug: slug } }">
                    <img :src="logoUrl" alt="">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BookView',
    props: {
        flag: {
            type: Number,
            default: 2
        },
        author: String,
        cover: String,
        rating: String,
        slug: String,
        synopsis: String,
        title: String,
        upvoted: Boolean,
        upvotes: Number,
    },
    computed: {
        boardStyle(): any {
            if (this.flag != undefined) {
                if (this.flag % 2 == 1) {
                    return {
                        backgroundColor: '#fafaf3',
                        fontSize: '1rem',
                        // display: 'flex',
                        padding: '10px'
                    }
                } else {
                    return {
                        fontSize: '1rem',
                        backgroundColor: 'white',
                        // display: 'flex',
                        padding: '10px'
                    }
                }
            } else {
                return {};
            }
        },
        logoUrl(): any {
            if (this.cover != undefined) {
                return this.cover.replace('DESKTOP-DF4VDR6', 'localhost')
            } else {
                return {};
            }
        },
        reduced(): any {
            if (this.synopsis != undefined) {
                return this.synopsis.slice(0, 200) + ' ... ';
            } else {
                return {};
            }
        }
    }
})
</script>

<style lang="scss" scoped>
div.content {
    width: 80%;
    margin: 0 auto;
    div.vote {
        display: flex;
        margin-top: 40px;
        justify-content: start;
        align-items: center;
    }
}

.logo {
    width: 20%;
    margin: 0 auto;
    img {
        width: 100%;
        border-radius: 10px;
        object-fit: contain;
    }
}

.display {
    display: flex;
}
@media only screen and (max-width: 900px) {
    .display {
        display: block;
    }
    .logo {
        margin-top: 20px;
        width: 50%;
    }
}

@media only screen and ( max-width: 600px ) {
    .logo {
        width: 80%;
    }
    .vote {
        margin-top: 10px!important;
    }
}

.btn {
    font-size: 1rem;
    border: 1px solid #ddaa43;
    height: 18px;
    border-radius: 7px;
    padding: 10px 20px;
    margin-right: 20px;
    cursor: pointer;
}

.upvoted {
    background-color: #ddaa43;
    color: white;
}

.upvote {
    background-color: white;
    color: #ddaa43;
}

.color {
    font-size: 1.5rem ! important;
    color: #aa7823;
    font-weight: bold;
    text-decoration: none;
}

</style>