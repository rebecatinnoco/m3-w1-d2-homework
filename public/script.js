 // register modal component
 Vue.component("modal", {
    template: "#modal-template"
  });

  // start app
  new Vue({
    el: "#app",
    data: {
      showModal: false
    }
  });
  new Vue({
    el: ".post",
    data: {
      showModal: false
    },
    components:{
    'new_component' : {
             template : '<img class="mimage" src="images/profile.png">'
          }
      }
  });
  var app = new Vue({
    el: '.post2',
    data: {
        obj5: 'CATHERINE LEONARDO',
        obj6: 'February 13, 2021 @ 12:58 pm',
        obj7: 'REPLY',
        obj8: ' LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.'
    },
    components:{
    'new_component' : {
       template : '<img src="images/profile.png">'
    }
 }
});
var app = new Vue({
    el: '.post3',
    data: {
        obj9: 'KALI',
        obj10: 'February 13, 2021 @ 11:31 am',
        obj11: 'REPLY',
        obj12: ' This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!'
    },
    components:{
    'new_component' : {
       template : '<img src="images/profile.png">'
    }
 }
});
var app = new Vue({
    el: '.post1',
    data: {
        obj13: 'LINH',
        obj14: 'February 15, 2021 @ 9:46 am',
        obj15: 'REPLY',
        obj16: ' I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good.  It’s a winner!  I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him.  Thank you Lisa!'
    },
    components:{
    'new_component' : {
       template : '<img src="images/profile.png">'
    }
 }
});