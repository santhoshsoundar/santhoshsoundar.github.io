---
layout: post
title: My Critique on Precinct-Level Choropleth Map
mytags: "#nyTimes #Upshot #Critique"
img: <img class="post-cover" src="../static/img/blog/critique/percinct.png" border="5" alt="Responsive image">
tags:
- nyTimes
- Upshot
- Critique

---
<style>.container {
  width: auto;
  max-width: 800px;
  text-align: center;

}
</style>
<p><img src="../static/img/blog/critique/main.png" alt="Test Image" style="width:704px;height:427px;"/></p>

> This is my critique on the article titled ["The Most Detailed Maps You’ll See From the Midterm Elections"](http://www.nytimes.com/interactive/2014/11/04/upshot/senate-maps.html?_r=0)
 @nytimes/upshot

<div class="divider"></div>

### [Infograph Overview:]()

This visualization is a precinct-level choropleth map of election results from the midterm elections. The objective of the visualization is to show a fine-grained analysis of how the Republicans and Democrats are spread along with the population density, measured by the graduated color scale. 

A precinct is one of the part into which a town or city is divided in order to organize elections, as reported by the article- “there were more than 175,000 precincts in the United States in 2012, fifty times the number of counties”. 

So this demonstrates the sheer efficacy of the precinct-level data and how effectively one can draw insights when the data is much finer. Now the county level analysis of polling results gives a clearer picture of how the data spread within the county. Hence, this visualization for me appears to have the potential to convey actionable insights.


<div class="divider"></div>

###  [Visualization Technique:]()

This is a geo-location based map visualization technique called choropleth map and it uses a coloring scheme inside defined areas on a map in order to show value levels and indicate the average values of some property or quantity in those areas.

 
<div class="divider"></div>

###  [How it works:]()

The basic design is to represent Democratic in blue and Republican in red with various hue levels based on the population density within the precincts. Much needed zoom functionality is provided with dynamic county-level labeling in the first layer and precinct-level labeling in the further zoom levels.

* Key insights described as a result of detected patterns at different areas/regions.
* Overall percentage split-up shown state wide per candidate.
* Compare and contrasts population based on its metadata like candidate origin, racial attributes etc.
* Population density as hue variation augmented with party specific colors.
* MouseOver shows the candidate information and total number of votes.
* Minimal design with the insights described in the form of plain text.
* Every visualization technique has it own pros and cons in terms of how well it depicts the data. This is an excellent example of geo-data-visualization with optimal usage of design, color and area breakdown. The following are the few points summarizing this.

<div class="divider"></div>

###  [Design Mileage:]()

The precinct-level data clearly adds a lot of detail and outlines distinct clusters.
Helpful for finding intriguing relationships between two or more geographic location based on the nature of the population.
Give an idea of how each area compares with other in terms of number and spread of votes.
 
<div class="divider"></div>

###  [Data Sources:]()

State wise polling data is sourced from the corresponding state’s Board of Elections, therefore the probe for data integrity will be simply out of question, at least from where I stand. 
Streets data by OpenStreetMap contributers.









