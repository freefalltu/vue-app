<template>
    <form class="form" @submit.prevent>
        <h4>Создание поста</h4>
        <MyInput
            v-model="post.title"
            type="text" 
            placeholder="Название"
        >
        </MyInput>
        <MyInput 
            v-model="post.body"
            type="text" 
            placeholder="Описание"
        >
        </MyInput>
        <MyButton 
            class="btn__form"
            @click="createPost"
        >
        Создать
        </MyButton>
    </form>
</template>

<script>
import MyInput from './UI/MyInput.vue';

export default {
    data() {
        return {
            post: {
                title: '',
                body: '',
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post);
            this.post = {
                title: '',
                body: '',
            }
        }
    }
}
</script>

<style scoped>

.btn__form {
    align-self: flex-end;
    margin-top: 15px;
}

.form {
    display: flex;
    flex-direction: column;
}
</style>