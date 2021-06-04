<template>
    <div class="notes__wrapper">
        <div class="note-header" style="margin: 36px 0;">
            <h1> {{ title }} </h1>

            <search 
              :value="search" 
              placeholder="Find your note" 
              @search="search = $event" />

            <div class="icons">
              <svg :class="{ active: grid }" @click="grid = true" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <svg :class="{ active: !grid }" @click="grid = false" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
            </div>
          </div>
        <div class="notes">
            <div class="note" :class="[{ full: !grid}, note.status]" v-for="(note, index) in notesFilter" :key="index">
                <div class="note-header" :class="{ full: !grid }">
                    <p> {{ note.title }} </p>
                    <p style="cursor: pointer;" @click="removeNote(index)">x</p>
                </div>
                <div class="note-body" >
                    <p> {{ note.descr }} </p>
                    <span> {{ note.date }} </span>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import search from '@/components/Search.vue'
export default {
    components: {
        search
    },
    data () {
        return {
            title: 'Notes App',
            notes: null,
            search: '',
            grid: true,
        }
    },
   created () {
      this.notes = this.$store.getters.getNotes
    },
    computed: {
        notesFilter () {
            let array = this.notes,
            search = this.search
            if (!search) return array
            // small
            search = search.trim().toLowerCase()
            // Filter
            array = array.filter(function (item) {
                if (item.title.toLowerCase().indexOf(search) !== -1) {
                    return item
                }
            })
            // Error
            return array
      }
    },
   methods: {
        removeNote (index) {
            this.$store.dispatch('deleteNote', index)
        }
   }
}
</script>



<style lang="scss">
    .notes {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 40px 0;
    }
    .note {
        width: 48%;
        padding: 18px 20px;
        margin-bottom: 20px;
        background-color: white;
        transition: 0.25s cubic-bezier(.02,.01,.47,1);
        box-shadow: 0 30px 30px rgba(0,0,0,0.02);

        &:hover {
            box-shadow: 0 30px 30px rgba(0,0,0,0.04);
            transform: translate(0, -6px);
            transition-delay: 0s !important;
        }

        &.full {
            width: 100%;
            text-align: center;
        }
    }

    .note-header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1 {
            font-size: 32px;
        }

        p {
            color: #3a2792;
            font-size: 22px;
        }
        svg {
            margin-right: 12px;
            color: #999999;

            &.active {
                color: #3a2792;
            }

            &:last-child {
                margin-right: 0;
            }
        }

        &.full {
            justify-content: center;

            p {
                margin-right: 16px;

                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
    .note-body {
        p {
            margin: 20px 0;
        }
        span {
            font-size: 14px;
            color: #999999;
        }
    }

</style>