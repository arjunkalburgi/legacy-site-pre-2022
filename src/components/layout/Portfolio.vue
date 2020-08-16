<template lang="html">
  <section class="portfolio section" id="portfolio">
    <div class="portfolio-intro">
      <p>Working on these products requires constant learning and work.</p>
      <div class="portfolio_introbuttons">
        <Button class="portfolio_introbutton" link="writing" text="Learning" />
        <Button
          class="portfolio_introbutton"
          link="https://github.com/arjunkalburgi"
          text="Work"
        />
      </div>
      <small>View all my content or some highlights below.</small>
    </div>

    <theImage
      class="portfolio_projimage"
      :path="titnProj.image.path"
      :alttext="titnProj.image.alttext"
    />
    <PortfolioItem v-bind:item="titnProj" />

    <div class="portfolio-items">
      <PortfolioItem
        v-for="item in portfolio_items"
        :key="item.title"
        v-bind:item="item"
      />
    </div>
  </section>
</template>

<script lang="js">

  import theImage from './../system/Image.vue'
  import Button from './../system/Button.vue'
  import PortfolioItem from './../system/PortfolioItem.vue'

  export default  {
    name: 'portfolio',
    components: {
      theImage,
      Button,
      PortfolioItem
    },
    props: [],
    mounted () { },
    data () {
      return {
        titnProj: {
            title: "Titan96 Marketing Site",
            tags: "FinTech, Marketing, Website",
            description: "",
            buttonlink: "https://www.titan96.com",
            buttontext: "View Live",
            image: {
              path: "titn.png",
              alttext: "Images of the Titan96 Website in different screensizes."
            }
        },
        portfolio_items: [
          {
            title: "Creating Team Bonding",
            tags: "Leadership, React Native, UX Research",
            description: "After a bad year, the culture of the Computer Engineering Club needed to change so that we could make the largest student hackathon in Alberta even larger. My solution was custom Slack emojis and I built a way to democratize them.",
            buttonlink: "https://github.com/arjunkalburgi/slackify",
            buttontext: "View on Github",
          },
          {
            title: "Coding a Business Model",
            tags: "Product Management, Angular, Design",
            description: "Personal stylists can take on more clients using image detection, data science and a mobile app. Creating User flows and ER diagrams helped me build an app that can bring stylists to the amount of business personal trainers enjoy.",
            buttonlink: "https://github.com/arjunkalburgi/stylist-assistant",
            buttontext: "View on Github",
          },
          {
            title: "Shaping a Project",
            tags: "Project Management, Startup",
            description: "I've learned to approach all new projects with a spec document, it helps to manage the scope as it changes and keep conversations productive. I used BaseCamp's Shape Up to add new layers to my process.",
            buttonlink: "https://www.arjunkalburgi.com/writing/shaping-an-app-spec/",
            buttontext: "Read the Story",
          },
          {
            title: "Developing Behaviour",
            tags: "Behavioural Design, Angular",
            description: "Reading Carol Dweck taught me that every challenge needs the right mindset. At the same time, my peers in my design course were being overwhelmed by the workload. I experimented with how a tool could help them change.",
            buttonlink: "https://www.arjunkalburgi.com/writing/stressful-tasks-a-behavioural-design-experiment",
            buttontext: "Read the Story",
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
    @media screen and (max-width: 40em) {
      text-align: left;
    }
  }

  &_introbutton {
    display: inline-block;
    &:first-of-type {
      margin-right: 10px;
    }
  }

  &-items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: calc(min(15%, 8rem));

    @media screen and (max-width: 40em) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
