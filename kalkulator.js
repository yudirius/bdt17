var calculator= {
	
	tambah : function(a,b){
		return a+b;
	},
	kurang : function(a,b){
		return a-b;
	},
	kali : function(a,b){
		return a*b;
	},
	samadengan : function(a,b){
		//jika lebih besar a
		if(a>b)
		{
			return a + 'lebih besar dari'+b;
		}
		else if (a==b) 
		{
			return a +'sama dengan'+b;
		}
		else
		{
			return b +'lebih besar dari'+a;
		}
	}
}

console.log(calculator.tambah(2,3));
console.log(calculator.kurang(2,3));
console.log(calculator.kali(2,3));
console.log(calculator.samadengan(2,3));

