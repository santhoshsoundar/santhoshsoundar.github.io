---
layout: post
title:  Equinix Data Viz Challenge - Magneto  
img: <img class="post-cover" src="../static/img/blog/equinix/equinix_preview.png"  border="5" alt="Responsive image">
---

<style>@import url(../equinix/css/magneto-style.css);</style>
<style>@import url(../static/css/dc.min.css);</style>

<div class="container" id="dashContain">
	<div class="row">
    <div class="col-md-6">
      <!-- Nav tabs -->
      <div class="card">
                <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="active"><a href="#composite" id="compositeLink" aria-controls="composite" role="tab" data-toggle="tab">Composite Dashboard</a></li>
                    <li role="presentation"><a href="#customer" id="customerLink" aria-controls="customer" role="tab" data-toggle="tab">Customer Insights</a></li>
                    <li role="presentation"><a href="#eda" id="edaLink" aria-controls="eda" role="tab" data-toggle="tab">Top 50 Customers</a></li>
                    <li role="presentation"><a href="#sector" id="sectorLink" aria-controls="sector" role="tab" data-toggle="tab">Time Series - Avg Scores</a></li>
                    <li role="presentation"><a href="#wrk" aria-controls="wrk" role="tab" data-toggle="tab">Workflow</a></li>
                    <li role="presentation"><a href="#about" aria-controls="about" role="tab" data-toggle="tab">@Magneto</a></li>
                </ul>
        <!-- Tab panes -->
        <div class="tab-content">
                <div role="tabpanel" class="tab-pane active" id="composite">
                        <div class="container" id="composite-container">
                            <div class="row">
                                  <div id="score-line-chart">
                                      <span class="chart-title">Magneto Score Components Over Time</span>
                                      <a class="reset" href="javascript:functionScoreChart.filterAll('magScoresGrp');dc.redrawAll('magScoresGrp');" style="display: none;">reset</a>
                                      <div class="clearfix"></div>
                                  </div>
                            </div>
                            <BR>
                            <div class="row">
                                  <div id="segment-row-chart">
                                      <span class="chart-title">Customer Segment Frequency</span>
                                      <p class="subText"> select segment to filter </p>
                                      <a class="reset" href="javascript:functionSegmentChart.filterAll('magScoresGrp');dc.redrawAll('magScoresGrp');" style="display: none;">reset</a>
                                      <div class="clearfix"></div>
                                  </div>
                                  <div id="year-bar-chart">
                                      <span class="chart-title">Annual Customer Distribution</span>
                                      <p class="subText"> select year to filter </p>
                                      <a class="reset" href="javascript:functionYearChart.filterAll('magScoresGrp');dc.redrawAll('magScoresGrp');" style="display: none;">reset</a>
                                      <div class="clearfix"></div>
                                  </div>
                                  <div id="market-pie-chart">
                                    <span class="chart-title">Market Shares</span>
                                    <p class="subText"> select market to filter </p>
                                    <a class="reset" href="javascript:functionMarketChart.filterAll('magScoresGrp');dc.redrawAll('magScoresGrp');" style="display: none;">reset</a> 
                                    <div class="clearfix"></div>
                                  </div>  
                            </div>
                            <div class="row">
                                  <div class="dc-data-count">
                                    <span class="filter-count"></span> selected out of <span class="total-count"></span> records 
                                  </div>
                                  <BR>
                                  <div id="bubble-chart">
                                      <span class="chart-title">15000 Customer by Scores<br>&nbsp;&nbsp;&nbsp;[radius - mScore]</span>
                                      <a class="reset" href="javascript:customerBubbleChart.filterAll('magScoresGrp');dc.redrawAll('magScoresGrp');" style="display: none;">reset</a>
                                      <div class="clearfix"></div>
                                      <p class="subText"> select customer to filter </p>
                                  </div>
                            </div>
                        </div>
                </div>
                <div role="tabpanel" class="tab-pane" id="customer">
                        <div class="container" id="customer-container" style="display: none;">
                            <div class="row">
                                <button onclick="mySearchFunction()" style="float:right;" class="button1"> Fetch </button>
                                <input type="search" id="mySearch" placeholder="enter a customer id.." style="float:right;">
                            </div>
                            <BR>
                            <div class="row">
                                  <div id="custComposite">
                                      <span class="chart-title">Magneto Score Components Over Time</span>
                                      <BR>
                                      <strong id="customerIDVal">Insights for CustID - 1 </strong>
                                      <a class="reset" href="javascript:functionCompositeChart.filterAll('customerChartGrp');dc.redrawAll('customerChartGrp');" style="display: none;">reset</a>
                                      <div class="clearfix"></div>
                                  </div>
                            </div>
                            <BR>
                            <div class="row">
                                  <div id="cust-year-bar">
                                      <span class="chart-title">Annual Customer Distribution</span>
                                      <p class="subText"> select year to filter </p>
                                      <a class="reset" href="javascript:functionCustYear.filterAll('customerChartGrp');dc.redrawAll('customerChartGrp');" style="display: none;">reset</a>
                                      <div class="clearfix"></div>
                                  </div>
                                  <div id="cust-market-pie">
                                    <span class="chart-title">Market Shares</span>
                                    <p class="subText"> select market to filter </p>
                                    <a class="reset" href="javascript:functionCustMarket.filterAll('customerChartGrp');dc.redrawAll('customerChartGrp');" style="display: none;">reset</a> 
                                    <div class="clearfix"></div>
                                  </div>  
                                   <BR>
                                  <div class="dc-data-count" id="customerCount">
                                      <span class="filter-count"></span> selected out of <span class="total-count"></span> records 
                                  </div>
                            </div>
                        </div>  
                </div>
                <div role="tabpanel" class="tab-pane" id="sector">
                        <div class="container" id="sector-container" style="display: none;">
                            <div class="row">
                                  <div id="avg-line-chart">
                                      <span class="chart-title">Average Scores Over Time</span>
                                  </div>
                                  <div id="avg-volume-chart">
                                      <span class="chart-title">Select time range to zoom in</span>
                                      <a class="reset" href="javascript:avgVolChart.filterAll('magScoresGrp');dc.redrawAll('magScoresGrp');" style="display: none;">reset</a>
                                      <div class="clearfix"></div>
                                  </div>
                            </div>
                        </div>  
                </div>
                <div role="tabpanel" class="tab-pane" id="eda">
                        <div class="container" id="eda-container" style="display: none;">
                             <div class="row">
                                  <div id="top-bubble-chart">
                                      <span class="chart-title">Top 50 Customers based on mean comp_mscore, ic_net_score & gdi_net_score</span>
                                      <p class="subText"> select customer to filter </p>
                                  </div>
                            </div>
                            <div class="row">
                                  <div id="top-table">
                                      <table class="table table-hover dc-data-table" id="top-cust-table">
                                            <thead>
                                            <tr class="header">
                                                <th>CustID</th>
                                                <th>Average comp_mscore</th>
                                                <th>Average ic_net_score</th>
                                                <th>Average gdi_net_score</th>
                                                <th>Segment</th>
                                            </tr>
                                            </thead>
                                      </table>
                                  </div>
                            </div>
                        </div>
                </div>
                <div role="tabpanel" class="tab-pane" id="wrk">
                        <p>My workflow consist of the following componenets:</p>
                        <h5>- Exploratory Analysis</h5>
                        <p class='workflowPara'> First up, I wanted to perform exploratory analysis on the dataset in otder to find the posible features that contains key insights. <BR>
                        So I used <span class='highlightText'> Python - Pandas</span> to group by and apply conditions on the features to visualize the outcomes with <span class='highlightText'> seaborn. </span>
                        Looking at the distributions of features, I realized I was not able to build any meaningful time series unless I break down the dataset based on one or more features. eg - 
                        Customer ID gives us individual time series. 
                        </p> 
                        <h5>- Wireframing</h5>
                        <p class='workflowPara'>At this point, I did my initial wireframing for the plots based on the data and the outcome I extracted from my exploratory analysis.</p>
                        <h5>- Project Planning</h5>
                        <p class='workflowPara'>Before starting my development, I had to make some decisions on what kind of tools I am going to use to build my plots with keeping in mind the the possible features I wanted to bring into the plots.</p> 
                        <h5>- Setting up my Backend</h5>
                        <p class='workflowPara'>Next I worked on setting up my backend as a microservice with <span class='highlightText'> Flask - Python</span> to serve the transformed data after grouping functions are applied. <a href="https://github.com/Santhosh114/Flask-MicroService">GitHub</a></p>
                        <h5>- Preparing my Frontend</h5>
                        <p class='workflowPara'>Built my template and mapper functions to integrate multiple crossfilter enabled plots & to redraw each chart group during tab onClick events to keep the DOM lightweight.</p>
                        <h5>- Building my Filters</h5>
                        <p class='workflowPara'>Built my filter - dimentions & groups with <span class='highlightText'>crossfilter.js</span> which acts as a basic framework for the plots to filter each other in response to onClick events </p>
                        <h5>- Charting</h5>
                        <p class='workflowPara'> With <span class='highlightText'>DC.js</span> I have composed my plots and these could be converted into a reusable chart module with little effort. <a href="https://github.com/Santhosh114/Santhosh114.github.io/tree/master/equinix/js">GitHub</a></p>
                        <h5>- Code clean-up</h5>
                        <p class='workflowPara'>Finally I wrapped it up with code cleanup, crossbrowser testing and version control. </p>
                </div>
                <div role="tabpanel" class="tab-pane" id="about">
                <h5>Dataset:</h5>
                    <ul class="about-data">
                      <li> year – year of score </li>
                      <li> month – month of score </li>
                      <li> market – region of customer: AMER is Americas, APAC is Asia Pacific, EMEA is Europe, Middle East and Africa </li>
                      <li> cust_id – a unique ID of each customer </li>
                      <li> cust_segment – we divide our customers into various buckets of business sectors </li> 
                      <li> comp_mscore – composite m-score. A higher score represents deeper and denser co-system </li>
                      <li> ic_net_score – interconnection score. A measure of how well connected a customer is </li>
                      <li> gdi_net_score -  weighted average of net IBX (datacenter) presence and net metro presence. Higher score means a higher presence within the region </li>
                      <li> cc_count_as_zside – cross connect (line between two machines owned by different customers within a datacenter) count, for incoming connections </li>
                      <li> cc_count_as_aside – cross connect count, for outgoing connections </li>
                      <li> net_ibx_presence – total number of IBXs that the customer is in within the region </li>
                      <li> net_metro_presence – total number of metros (areas of datacenters) that the customer is in within the region </li>
                    </ul>
                </div>
        </div>
      </div>
    </div>
	</div>
</div>

<script src="../equinix/package/jquery.min.js"></script>
<script src="../equinix/package/d3.v3.min.js"></script> 
<script src="../equinix/package/crossfilter.min.js"></script>
<script src="../equinix/package/dc.min.js"></script>

<script src="../equinix/js/compositeInsights.js"></script>
<script src="../equinix/js/customerInsights.js"></script>
<script src="../equinix/js/top50customers.js"></script>
<script src="../equinix/js/mapper.js"></script>
