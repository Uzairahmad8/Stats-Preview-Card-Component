"use strict";

class AchievementCounter {
  constructor() {
    this.company = document.querySelector(".company");
    this.template = document.querySelector(".template");
    this.query = document.querySelector(".querie");
    this.achievement = document.querySelector(".company");
    this.minCompany = this.minTemp = this.minQuery = 0;
    this.maxCompanies = parseInt(this.company.getAttribute("data-company"));
    this.maxTemplates = parseInt(this.template.getAttribute("data-template"));
    this.maxQueries = parseInt(this.query.getAttribute("data-queries"));

    const observerCallback = (entries, observer) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        this.startAnimation();
        observer.unobserve(this.achievement);
      }
    };

    this.observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0,
    });
  }

  startAnimation() {
    this.animationInterval = setInterval(() => {
      if (this.minCompany < this.maxCompanies) {
        this.company.textContent = `${++this.minCompany}k+`;
      }

      if (this.minQuery < this.maxQueries) {
        this.query.textContent = `${++this.minQuery}M+`;
      }

      if (this.minTemp < this.maxTemplates) {
        this.template.textContent = ++this.minTemp;
      }

      if (
        this.minCompany >= this.maxCompanies &&
        this.minQuery >= this.maxQueries &&
        this.minTemp >= this.maxTemplates
      ) {
        clearInterval(this.animationInterval);
      }
    }, 70);
  }

  observeAchievement() {
    this.observer.observe(this.achievement);
  }
}

const achievementCounter = new AchievementCounter();
achievementCounter.observeAchievement();
