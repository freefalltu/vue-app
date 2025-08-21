<template>
    <div>
        <h1>Страница с постами</h1>
        <MyInput 
        v-model="searchQuery"
        placeholder="Поиск..."
        />
        <div class="app__btns">
            <MyButton @click="showDialog">Создать пост</MyButton>
            <MySelect v-model="selectedSort" :options="sortOptions"/>
        </div>
        <MyDialog v-model:show="dialogVisible">
            <PostForm @create="createPost"/>
        </MyDialog>
        <PostList 
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
        v-if="!isPostsLoading"
        />
        <div v-else="">Идет загрузка...</div>
        <div class="page__wrapper">
            <div
            v-for="pageNumber in totalPages"
            :key="pageNumber"
            class="page"
            :class="{
                'current-page': page === pageNumber
            }"
            @click="changePage(pageNumber)"
            >
            {{ pageNumber }}
            </div>
        </div>
    </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import MyButton from "@/components/UI/MyButton.vue";
import MySelect from "@/components/UI/MySelect.vue";
import { usePosts } from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";

export default {
    components: {
        PostList, PostForm
    },
    data() {
        return {
            dialogVisible: false,
            sortOptions: [
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По описанию'},
            ],
            // searchQuery: '',
            // page: 1,
            // limit: 10,
            // totalPages: 0,
        }
    },
    setup(props) {
        const {posts, totalPages, isPostsLoading} = usePosts(10)
        const {sortedPosts, selectedSort} = useSortedPosts(posts)
        const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)

        return {
            posts,
            totalPages,
            isPostsLoading,
            sortedPosts,
            selectedSort,
            searchQuery,
            sortedAndSearchedPosts
        }
    }
}
</script>

<style>
.app__btns {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    margin-bottom: 15px;
}

.page__wrapper {
    display: flex;
    margin-top: 15px;
}

.page {
    border: 1px solid black;
    padding: 10px;
}

.current-page {
    border: 2px solid teal;
}
</style>