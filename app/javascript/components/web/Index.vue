<template>
<div>
    <h1>Index Pages</h1>
    <button type="button" class="btn btn-primary" v-on:click="getLocation">周辺のお店を検索</button>
    <p v-for="(place, key, index) in places" :key="index">
        {{place.name}}
    </p>
</div>
</template>

<script>

export default {
    data: function() {
        return {
            location: [],
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
                    this.location.push({ lati: position.coords.latitude, long: position.coords.longitude});
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
        }
    }
}

</script>