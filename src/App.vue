<template>
  <div class="wrapper">
    <div class="wrapper-content">

      <section>
        <div class="container">
          <div class="note-header" style="margin: 36px 0; justify-content: center;">
            <p> {{ title }} </p>
          </div>
          
          <newNote />

          <notes />
          
        </div>
      </section>

    </div>
  </div>
</template>

<script>
  import newNote from '@/components/NewNote.vue'
  import notes from '@/components/Notes.vue'
  export default {
    components: {
      newNote,
      notes
    },
    data () {
      return {
        title: 'Notes App'
      }
    }
  }
</script>

<style scoped>
  .container {
    max-width: 800px;
  }
</style>