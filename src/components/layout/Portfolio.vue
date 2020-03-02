<template lang="html">

  <section class="portfolio section" id="portfolio">
		<div class="portfolio-intro">
			<p>Working on these products requires constant learning and work.</p>
			<div>
        <Button class="" link="writing" text="Learning" />
        <Button class="" link="https://github.com/arjunkalburgi" text="Work" />
			</div>
			<small>View all my content or some highlights below.</small>
		</div>
		
		<div class="portfolio_item">
			<h2 class="portfolio_item--title">Creating Team Bonding</h2>
			<small class="portfolio_item--tags">Leadership, React Native, UX Research</small>
			<p class="portfolio_item--description">
				After a bad year, the culture of the Computer Engineering Club needed to change so that we could make the largest
				student hackathon in Alberta even larger. My solution was custom Slack emojis and I built a way to democratize them.
			</p>
			<div class="portfolio_item--button">
        <Button link="https://github.com/arjunkalburgi/slackify" text="View on Github" />
			</div>
			<div class="portfolio_item--image">
				<div class="image slack b-lazy"></div>
			</div>
		</div>
		
		<div class="portfolio_item">
			<h2 class="portfolio_item--title">Coding a Business Model</h2>
			<small class="portfolio_item--tags">Product Management, Angular, Design</small>
			<p class="portfolio_item--description">
				Personal stylists can take on more clients using image detection, data science and a mobile app. Creating User flows and
				ER diagrams helped me build an app that can bring stylists to the amount of business personal trainers enjoy.
			</p>
			<div class="portfolio_item--button">
        <Button link="https://github.com/arjunkalburgi/stylist-assistant" text="View on Github" />
			</div>
			<div class="portfolio_item--image">
				<div class="image style b-lazy"></div>
			</div>
		</div>
		
		<div class="portfolio_item">
			<h2 class="portfolio_item--title">Persevering using details</h2>
			<small class="portfolio_item--tags">Growth Mindset, Travel</small>
			<p class="portfolio_item--description">
				I was still falling an hour and a half after everyone else in the beginners class was able to stand, but my mind I was
				focused on the details of what I was doing, because the details are where you find success.
			</p>
			<div class="portfolio_item--button">
        <Button link="https://www.arjunkalburgi.com/writing/Learning-to-Surf---a-Mindset-practice" text="Read the Story" />
			</div>
			<div class="portfolio_item--image">
				<div class="image surf b-lazy"></div>
			</div>
		</div>
		
		<div class="portfolio_item">
			<h2 class="portfolio_item--title">Developing Behaviour</h2>
			<small class="portfolio_item--tags">Behavioural Design, Angular</small>
			<p class="portfolio_item--description">
				Reading Carol Dweck taught me that every challenge needs the right mindset. At the same time, my peers in my design
				course were being overwhelmed by the workload. I experimented with how a tool could help them change.
			</p>
			<div class="portfolio_item--button">
        <Button link="https://www.arjunkalburgi.com/writing/Stressful-Tasks--a-behavioural-design-experiment" text="Read the Story" />
			</div>
			<div class="portfolio_item--image">
				<div class="image tasks b-lazy"></div>
			</div>
		</div>
  </section>

</template>

<script lang="js">

  import Button from './../system/Button.vue'

  export default  {
    name: 'portfolio',
    components: {
      Button
    },
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">

  .image.slack { background-image: url("../../assets/pics/slack.jpeg") }
  .image.style { background-image: url("../../assets/pics/style.jpg") }
  .image.surf { background-image: url("../../assets/pics/surf.jpg"); filter: grayscale(0.6); }
  .image.tasks { background-image: url("../../assets/pics/tasks.jpg"); filter: grayscale(0.6); }

  .portfolio_button {
      background: #12A962;
      color: #fff;
      font-family: 'Raleway';
      text-transform: uppercase;
      font-size: 15px;
      letter-spacing: 1.2px;
      font-weight: 700;
      line-height: 17px;
      padding: 1rem 2rem;
      position: relative;
      margin: 20px 0;
      border-radius: 3px;
      text-decoration: none;
      display: inline-block;
      margin: 0;
  }

  .portfolio_item {
      display: grid;
      grid-template-columns: 50% auto;
      grid-column-gap: 15%;
      grid-template-rows: 18% 18% 43% auto;
      margin: 15vh 0;
  }

  .portfolio_item>* {
      margin: 0;
  }

  .portfolio_item--title {
      grid-column-start: 1;
      grid-column-end: 1;
      grid-row-start: 1;
      grid-row-end: 2;
      margin-bottom: 1vh;
      white-space: nowrap; 
  }

  .portfolio_item--tags {
      grid-column-start: 1;
      grid-column-end: 1;
      grid-row-start: 2;
      grid-row-end: 3;
      margin-bottom: 3vh;
  }

  .portfolio_item--description {
      grid-column-start: 1;
      grid-column-end: 1;
      grid-row-start: 3;
      grid-row-end: 4;
      margin-bottom: 3vh;
  }

  .portfolio_item--button {
      grid-column-start: 1;
      grid-column-end: 1;
      grid-row-start: 4;
      grid-row-end: 5;
  }

  .portfolio_item--image {
      grid-column-start: 2;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 5;
  }
</style>
