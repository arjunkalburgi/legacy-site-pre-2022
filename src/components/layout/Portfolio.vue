<template lang="html">

  <section class="portfolio section" id="portfolio">
		<div class="portfolio-intro">
			<p>Working on these products requires constant learning and work.</p>
			<div class="portfolio_introbuttons">
        <Button class="portfolio_introbutton" link="writing" text="Learning" />
        <Button class="portfolio_introbutton" link="https://github.com/arjunkalburgi" text="Work" />
			</div>
			<small>View all my content or some highlights below.</small>
		</div>

    <PortfolioItem v-for="item in portfolio_items" :key="item.image" v-bind:item="item" />
  </section>

</template>

<script lang="js">

  import Button from './../system/Button.vue'
  import PortfolioItem from './../system/PortfolioItem.vue'

  export default  {
    name: 'portfolio',
    components: {
      Button,
      PortfolioItem
    },
    props: [],
    mounted () {

    },
    data () {
      return {
        portfolio_items: [
          {
            title: "Creating Team Bonding",
            tags: "Leadership, React Native, UX Research",
            description: "After a bad year, the culture of the Computer Engineering Club needed to change so that we could make the largest student hackathon in Alberta even larger. My solution was custom Slack emojis and I built a way to democratize them.",
            buttonlink: "https://github.com/arjunkalburgi/slackify",
            buttontext: "View on Github",
            image: "slack",
          },
          {
            title: "Coding a Business Model",
            tags: "Product Management, Angular, Design",
            description: "Personal stylists can take on more clients using image detection, data science and a mobile app. Creating User flows and ER diagrams helped me build an app that can bring stylists to the amount of business personal trainers enjoy.",
            buttonlink: "https://github.com/arjunkalburgi/stylist-assistant",
            buttontext: "View on Github",
            image: "style",
          },
          {
            title: "Persevering using details",
            tags: "Growth Mindset, Travel",
            description: "I was still falling an hour and a half after everyone else in the beginners class was able to stand, but my mind I was focused on the details of what I was doing, because the details are where you find success.",
            buttonlink: "https://www.arjunkalburgi.com/writing/Learning-to-Surf---a-Mindset-practice",
            buttontext: "Read the Story",
            image: "surf",
          },
          {
            title: "Developing Behaviour",
            tags: "Behavioural Design, Angular",
            description: "Reading Carol Dweck taught me that every challenge needs the right mindset. At the same time, my peers in my design course were being overwhelmed by the workload. I experimented with how a tool could help them change.",
            buttonlink: "https://www.arjunkalburgi.com/writing/Stressful-Tasks--a-behavioural-design-experiment",
            buttontext: "Read the Story",
            image: "tasks",
          },
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .portfolio {
    &-intro { 
      text-align: center;
      @media screen and (max-width: 40em) { text-align: left; }
    }

    &_introbutton { 
      display: inline-block;
      &:first-of-type  { margin-right: 10px; }
    }
  }
</style>
