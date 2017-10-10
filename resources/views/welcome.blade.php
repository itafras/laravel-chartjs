@include('layouts.head')

<div id="app">
    <div class="container">
        <div class="columns">
            
      <hr style="padding-bottom: 10px;">

<div class="column is-two-thirds">
    <div class="field"> 
          <div class="control">
            <input class="input" type="text" placeholder="Text input" is-two-thirds>
             <p class="help">Search by package name</p>
        </div>
    </div>
</div>

<div class="column">
    <label class="label"></label>
            <div class="control">
              <button class="button is-primary" @click.prevent="requestData">Submit</button>
            </div>
</div>
              </div>
        </div>

<div class="container" style="max-height: 60%">

<div class="columns">
    
    <div class="card">
  <div class="card-image">
    
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
      </div>
    </div>

    <div class="content">
      <line-chart :chart-metrics="chartMetrics" :chart-labels="chartLabels"></line-chart>
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>

</div>





</div>
</div>




</body>
<script src="/js/event-bus.js"></script>
<script src="js/main.js"></script>
</html>
