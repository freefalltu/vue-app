<template>
    <form class="form" @submit.prevent>
        <h4>Создание поста</h4>
        <input 
            v-model="post.title"
            class="input"
            type="text" 
            placeholder="Название"
        >
        </input>
        <input 
            v-model="post.body"
            class="input" 
            type="text" 
            placeholder="Описание"
        >
        </input>
        <MyButton 
            class="btn__form"
            @click="createPost"
        >
        Создать
        </MyButton>
    </form>
</template>

<script>
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

.input {
    width: 100%;
    border: 1px solid teal;
    padding: 10px 15px;
    margin-top: 15px;
}

.form {
    display: flex;
    flex-direction: column;
}
</style>