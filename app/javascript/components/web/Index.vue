<template>
<div>
    <h1>Index Pages</h1>
    <button type="button" class="btn btn-primary" v-on:click="getPlace">周辺のお店を検索</button>
    <p v-for="(place, key, index) in places" :key="index">
        {{place.name}}
    </p>
</div>
</template>

<script>

import axios from 'axios'

function round(number, precision) {
  var shift = function (number, precision, reverseShift) {
    if (reverseShift) {
      precision = -precision;
    }  
    var numArray = ("" + number).split("e");
    return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
  };
  return shift(Math.round(shift(number, precision, false)), precision, true);
}

export default {
    data: function() {
        return {
            location: {
                lati: 0.0,
                long: 0.0
            },
            places: []
        }
    },
    mounted: function() {
        this.canGetLocation()
        this.getLocation()
    },
    methods: {
        canGetLocation: function() {
            if (navigator.geolocation) {
                alert("この端末では位置情報が取得できます");
            } else {
                alert("この端末では位置情報が取得できません");
            }
        },
        getLocation: function() {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.location.lati = round(position.coords.latitude, 8);
                    this.location.long = round(position.coords.longitude, 8);
                    console.log(this.location);
                },
                (error) => {
                    switch(error.code) {
                        case 1: //PERMISSION_DENIED
                            alert("位置情報の利用が許可されていません");
                            break;
                        case 2: //POSITION_UNAVAILABLE
                            alert("現在位置が取得できませんでした");
                            break;
                        case 3: //TIMEOUT
                            alert("タイムアウトになりました");
                            break;
                        default:
                            alert("その他のエラー(エラーコード:"+error.code+")");
                        break;
                    }
                }
            );
        },
        getPlace: function() {

            const url = 'https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=' + String(gon.gurunavi_key) + '&latitude=' + String(this.location.lati) + '&longitude=' + String(this.location.long);

            axios.get(url).then((response) => {
                console.log(response);

                for(var i = 0; i < response.data.rest.length; i++){
                    this.places.push(response.data.rest[i]);
                }
            }, (error) => {
                console.log(error);
            })
        }
    }
}

</script>