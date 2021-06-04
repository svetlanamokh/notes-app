<template>
    <div class="new-note">
        <message v-if="message" :message="message"/>
        <label>Title</label>
        <input v-model="note.title" type="text"> 
        <label>Description</label>
        <textarea v-model="note.descr"></textarea>
        <div class="exp">
            <select v-model="note.status" class="priority">
                <option class="btn btnWhite" value="standart">standart</option>
                <option class="btn btnYellow" value="important">important</option>
                <option class="btn btnDanger" value="extremely_important">extremely important</option>
            </select> 
            <button class="btn btnPrimary" @click="addNote">New note</button>
        </div>
    </div>
</template>

<script>
import message from '@/components/Message.vue'
export default {
    components: {
        message
    },
    data () {
        return {
            note: {
                title: '',
                descr: '',
                status: 'standart'
            },
            message: null
        }
    },
    methods: {
        addNote () {
            let note = {};
            Object.assign(note, this.note)

            if (note.title === '') {
                this.message = 'title can`t be blank!'
                return false
            }
            
            this.$store.dispatch('addNotes', note)
            
            this.clearNoteForm();
        },
        clearNoteForm () {
            this.message = null
            this.note.title = ''
            this.note.descr = ''
            this.note.status = 'standart'
        }
    }
}
</script>

<style lang="scss">
    .new-note {
        text-align: center;
    }

    .standart {
        background-color: #fff !important;
    }

    .important {
        background-color: rgb(231, 243, 179) !important; 
    }

    .extremely_important {
        background-color: rgb(233, 171, 171) !important;
    }

    .category {
        margin-right: 40px;
        background-color: rgb(183, 234, 243);
        border-radius: 8px;
        cursor: pointer;
        padding: 5px 5px;
    }

    .exp {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    
    .priority {
        border-radius: 30px;
        background-color: lightblue;
        margin-top: 20px;
        padding: 5px 5px;
        max-width: 260px;
        color: white;
        font-size: 25px;
        text-align: center;
    }

</style>