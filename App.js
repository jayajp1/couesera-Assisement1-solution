(function () {
  'use strict';
  
  angular.module('ShoppingListApp', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListService', ShoppingListService)
  .provider('ShoppingListService',ShoppingListServiceProvider).config(Config);

  Config.$inject = ['ShoppingListServiceProvider'];
  function Config(ShoppingListServiceProvider) {
    ShoppingListServiceProvider.defaults.minItems = 5;
  }
  

  ToBuyController.$inject = ['ShoppingListService'];
  function ToBuyController(ShoppingListService) {
    var showList = this;
  
    showList.items = ShoppingListService.getItems();
    console.log(showList.items.length);
      if(showList.items.length===0){
        console.log(showList.items.length);
        showList.error1="Everything is bought";
        //showList.error2="Everything is bought";
      }
      else{
        showList.removeItem = function (itemIndex) {
          console.log("re")
          ShoppingListService.removeItem(itemIndex);
        };
      }
    }

    AlreadyBoughtController.$inject = ['ShoppingListService'];
    function AlreadyBoughtController(ShoppingListService) {
    var showList = this;
    var items;
      if(showList.items2===undefined){
        showList.error1="nothing Bought yet...";
      }
      //else if(showList.items.length==='0')
        showList.items2= ShoppingListService.getItems2();
    // }
    
      
    
  }

  function ShoppingListService(minItems) {
    var service = this;

    // List of shopping items
    var items2=[];
    var items = [
         {itemName: 'Cokkies', itemQuantity:5 },
          {itemName: 'Coke', itemQuantity:5 },
          {itemName: 'Cupecake', itemQuantity:5 },
          {itemName: 'Pizza', itemQuantity:5 },
          {itemName: 'Puff', itemQuantity:5 }
    ];
  
    service.addItem = function (itemName, quantity) {
        console.log(itemName,quantity)
        console.log(items.length,items2.length);
        var l=0;
         // console.log(items.length,minItems);
          var item = {
            itemName: itemName,
            itemQuantity: quantity
          };
          items2.push(item);
        
    };
  
    service.removeItem = function (itemIndex) {
      var showList=this;
     var it=items.splice(itemIndex, 1);
     var l=0;
     console.log(it[0].itemName,it[0].itemQuantity);
     if(items.length===0){
      showList.error1 = "knsni"; 
     }
     else{
      try{
        service.addItem(it[0].itemName,it[0].itemQuantity);
       }
       catch(error){
        showList.error1 = error.message;
        showList.error2 = error.message;
       }
     }
    
    };

    service.getItems = function () {
      return items;
    };
    service.getItems2 = function () {
      return items2;
    };
  }
  function ShoppingListServiceProvider() {
    var provider = this;
    provider.defaults = {
      minItems: 0
    };
    provider.$get = function () {
      var shoppingList = new ShoppingListService(provider.defaults.minItems);
      return shoppingList;
    };
  }
  })();
  