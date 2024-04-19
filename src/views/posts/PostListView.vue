<template>
    <div>
        <h2>게시글 목록</h2>
        <hr class="my-4">
        <div class="d-flex" role="search">
            <button class="btn btn-outline-success" type="button" @click="goPage">글쓰기</button>
        </div>
        <div class="row g-3">
            <div v-for="post in posts" :key="post.id" class="col-4">
                <AppCard 
                :title="post.title"
                :contents="post.contents" 
                :created-at="post.createdAt"
                @click="goPageId(post.id)">
            </AppCard>
            </div>
        </div>
        <hr class="my-4">
        <AppCard2> 
            <PostDetailView :id="1"></PostDetailView>
        </AppCard2>

    </div>
</template>

<script setup>
import AppCard from '@/components/AppCard.vue';
import PostDetailView from  '@/views/posts/PostDetailView.vue';
import AppCard2 from '@/components/AppCard2.vue';
import {getPosts} from '@/api/posts'
import { useRouter } from 'vue-router';
import {ref} from 'vue';

const router = useRouter()
const posts = ref([]);
const params = ref({
    _sort: 'createdAt',
    _order: 'desc',
})

const fetchPosts = async() => {
    try{
        const { data } = await getPosts(params.value);
        posts.value = data;
    }catch(error){
        console.error(error)
    }
    // getPosts()
    // .then((response)=>{
    //     console.log('response: ', response);
    // }).catch(error=>{
    //     console.log('error: ',error);
    // });
}

fetchPosts();
const goPage = () => {
    router.push('/posts/create');
};
const goPageId = (id) => {
    // router.push(`/posts/'${id}`);
    router.push({
        name:'PostDetail',
        params: {
            id,
        }
    })
};

</script>

<style lang="scss" scoped></style>