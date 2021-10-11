function cal()
{
   price = document.getElementById('product_price').value;
   count = document.getElementById('product_count').value;
   mult = parseInt(price) * parseInt(count);
   document.getElementById('mult').innerHTML="Стоимость: "+ mult + " руб.";
   return false;
}
