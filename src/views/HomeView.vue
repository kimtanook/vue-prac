<template>
  <div>
    <HelloWorld />
    <p>{{ message }}</p>
    <p>{{ reversedMessage }}</p>
    <p>{{ count }}</p>
    <p>{{ getTwoPowerCounter }}</p>
    <button @click="increase">increase</button>
  </div>
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { computed, defineComponent, ref } from "vue";
import { mapGetters, useStore } from "vuex";

export default defineComponent({
  data() {
    return {
      message: "Hello, Vue!",
    };
  },
  setup() {
    const store = useStore();
    const count = computed(() => store.state.count);
    const countRef = ref(count.value);
    const increase = () =>
      store.commit("setCounter", (countRef.value = countRef.value + 1)); // ref로 감싼 count.value에 접근합니다.
    return { count: countRef, increase };
  },
  computed: {
    reversedMessage(): string {
      return this.message.split("").reverse().join("");
    },
    ...mapGetters(["getTwoPowerCounter"]),
  },
  watch: {
    message(newMessage: string, oldMessage: string): void {
      console.log(`message changed from ${oldMessage} to ${newMessage}`);
    },
  },
  created(): void {
    console.log("component created");
  },
  methods: {
    incrementCount(): void {
      this.count++;
    },
  },
});
</script>
