<!--
  - Copyright (C) 2021 Cervon Wong.
  -->

<template>
  <main>
    <div class="margin-wrapper">
      <div class="line-length-limit-wrapper">
        <h1>About me</h1>
        <p>
          Hi! I’m Cervon Wong. I’m currently studying my fourth year at NUS High
          School of Math and Science. I have been working with code and design
          for about five years now.
        </p>
        <p>
          One thing that I enjoy about software development is creating products
          that others can use and find valuable. This has driven me to pursue
          front-end development and UI/UX design, and to create
          <em>never-done-before</em> experiences using my skills to benefit
          people around me.
        </p>
        <p>
          I’ll be sharing more details about myself in the sections below. The
          text below will be long-form and written like a story. For ease of
          navigation, you can jump to each section using the links below:
        </p>
        <ul>
          <li><a href="#How-I-got-here">How I got here</a></li>
          <li><a href="#What-I-do">What I do</a></li>
          <li><a href="#Philosophy">Philosophy</a></li>
          <li><a href="#Interests-and-hobbies">Interests & hobbies</a></li>
          <li><a href="#Where-next">Where next?</a></li>
        </ul>
        <h2 id="How-I-got-here">How I got here</h2>
        <h3>The beginning</h3>
        <p>
          My first foray into coding was when I was twelve. With the help of
          YouTube videos and some free time during the holidays, I managed to
          put together a simple text-based Python number guessing game. During
          that time, I also discovered how to make a functioning die using
          Microsoft Excel that was installed on the home computer.
        </p>
        <figure>
          <img
            src="../assets/images/about-me--excel.jpg"
            alt="A program containing a die and a button to roll the dice in Excel."
          />
          <figcaption>I still remember how to do it till today.</figcaption>
        </figure>
        <p>
          I was proud to show what I have created to my friends and family. And
          I was also inspired by what I could build next.
        </p>
        <p>
          Inadvertently, I had learnt the basics of algorithmic thinking, and
          even software design concepts like encapsulation and abstraction.
        </p>
        <h3>Pursuing my interests</h3>
        <p>
          During high school, I got to learn more about programming, such as the
          fundamentals of object-oriented programming and writing clean code. I
          also took the initiative to try out desktop app development with
          JavaFX, Android app development, and cross-platform development with
          Flutter.
        </p>
        <figure>
          <img
            src="../assets/images/about-me--vitary-email.jpg"
            alt="An email of a teacher commending me for creating a hospital management app using JavaFX."
          />
          <figcaption>
            I built a hospital management desktop app for a school contest using
            JavaFX in 2020 and won the contest!
          </figcaption>
        </figure>
        <p>
          As I got more comfortable with coding, I also started to refine my
          design skills. This allowed me to be able to convey the
          functionalities of my app more effectively, as well as to make my app
          easier and more enjoyable to use.
        </p>
        <figure>
          <img
            src="../assets/images/about-me--material-website.jpg"
            alt="Material Design's article on their website about how to design a responsive layout grid."
          />
          <figcaption>
            <a href="https://material.io/" target="_blank" rel="noopener"
              ><cite>Material Design</cite></a
            >'s website is one of my favourite sources to reference how to
            layout my app for both accessibility and clarity.
          </figcaption>
        </figure>
        <p>
          I’m always excited to hop into workshops, courses, or programmes about
          coding or design to meet new people and gain new insights into these
          fields. For example, I signed up for a five-day workshop on AI and
          satellites organised by the Defence Science and Technology Agency
          (DSTA) in June 2021 to learn more about AI.
        </p>
        <p>
          My teammates and I emerged as champions out of thirteen other IP
          schools!
        </p>
        <figure>
          <img
            src="../assets/images/about-me--dsta-poster.jpg"
            alt="My team's research poster for the workshop contest."
          />
          <figcaption>
            My team's final poster details how we used a convolutional neural
            network to analyse satellite images of ships for maritime security.
          </figcaption>
        </figure>
        <p>
          I also participated in
          <a
            href="https://engineeringgood.org/assistive-tech/t4g-home/"
            target="_blank"
            rel="noopener"
            >Tech For Good 2021</a
          >, a semester-long innovation challenge where finalists iterate and
          design assistive technology based on real problem statements written
          by various organisations in Singapore. This is where
          <!--suppress HtmlUnknownAnchorTarget -->
          <a href="#!">my team and I created Mint</a>.
        </p>
        <figure>
          <img
            src="../assets/images/about-me--t4g-booth.jpg"
            alt="The booth to showcase Mint at a virtual festival on a virtual meeting platform."
          />
          <figcaption>
            Due to Covid-19, the final demo day and festival was held online.
            This activity opened my eyes to the need for assistive technology in
            Singapore.
          </figcaption>
        </figure>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutMe",
  components: {},
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";

main {
  @include layout--push-footer;
}

.margin-wrapper {
  @include layout--main-margin-horz-normal;
  @include layout--main-margin-top-normal;
  @include layout--main-margin-bottom-normal;
}

.line-length-limit-wrapper {
  @include p--16;
  @include layout--limit-chars-per-line(60);
}

h1 {
  @include h1--standard;
  margin-bottom: 1em;
}

h2 {
  @include h2--standard;
}

h3 {
  @include h3--standard;
}

p {
  @include p--16;
}

img {
  box-shadow: 0 6px 12px 0 $shadow-black;
}

figcaption {
  @include p--14;
  color: $secondary-black;
  font-style: italic;
}
</style>
