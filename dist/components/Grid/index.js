Component({externalClasses:["mit-class"],options:{multipleSlots:!0},relations:{"../Grid-Item/index":{type:"child"}},properties:{columnNum:{type:Number,value:4},visible:{type:Boolean,value:!1},items:{type:Object}},methods:{},ready(){const e=this.getRelationNodes("../Grid-Item/index");Math.ceil(e.length/this.data.columnNum)}});