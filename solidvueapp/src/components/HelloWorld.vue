<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      This page has some information on 2020 prices
    </p>

    <h2>Tickers</h2>
    <div class="container infoblock" > <table class="table">
      <thead>
        <tr>
          <th scope="col">Ticker</th>
          <th scope="col">Name</th>
          <th scope="col">Currency</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ticker in tickers" v-bind:key="ticker.id">
          <td><strong> {{ticker.ticker}} </strong> </td>
          <td style="text-align:left;padding:5px;">{{ticker.name}}</td>
          <td>{{ticker.currency}}</td>
        </tr>
      </tbody>
      </table>
    </div>
  </div>

  <h2 style="padding-top:35px">Quotes for <input type="date" v-model="mydate" v-on:change="Datechange" /> </h2>


  <div class="container infoblock" >

    <table class="table">
      <thead>
        <tr>
          <th scope="col">Ticker</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dayquote in dayquotes" v-bind:key="dayquote.id">
          <td><strong> {{dayquote.ticker}} </strong> </td>
          <td style="text-align:left;padding:5px;"> {{dayquote.price}}</td>
        </tr>
      </tbody>
    </table>

  </div>

  <h2 style="padding-top:35px">Track a ticker <input type="text" v-model="tracked" v-on:change="iDatechange" /> 
     from:  <input type="date" v-model="startdate" v-on:change="iDatechange" /> 
    to:  <input type="date" v-model="enddate" v-on:change="iDatechange" />  </h2>


<div class="container infoblock" >

  <table class="table">
    <thead>
      <tr>
        <th scope="col">Date</th>
        <th scope="col"></th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="dayquote in intervalquotes" v-bind:key="dayquote.id">
        <td><strong> {{dayquote.date.substr(0,10)}} </strong> </td>
        <td></td>
        <td style="text-align:left;padding:5px;"> {{dayquote.price}}</td>
      </tr>
    </tbody>
  </table>

</div>


</template>

<script>
import axios from 'axios';
export default {
  name: 'TickersComponent',
  //var mydatec = new Date(2020-05-01);
  data() {
    return {
      tickers: null,
      dayquotes: null,
      intervalquotes: null,
      mydate: "2020-05-01",
      startdate: "2020-05-01",
      enddate: "2020-05-30",
      tracked : ""
    };
  },
  created: function () {
    axios
      .get('http://localhost:3000/tickers')
      .then(res => {
        this.tickers = res.data;
      })
  },
  methods: {
    Datechange: function () {
      console.log(this.mydate)
      axios
        .get('http://localhost:3000/quotesforaday/' + this.mydate)
        .then(res => {
          this.dayquotes = res.data;
        })
    },
    iDatechange: function () {
      console.log(this.mydate);  
      let iurl = 'http://localhost:3000/quotesforinterval/' + this.startdate+ '/' +   this.enddate+ '/'+ this.tracked;
      console.log(iurl);
      axios
        .get(iurl)
        .then(res => {
          this.intervalquotes = res.data;
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.infoblock {
  border-radius: 25px;
  padding: 20px;
  background: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
 

}
</style>
