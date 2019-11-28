

	function myFunction()
	 {
			var loopCount = parseInt(document.getElementById("LoopUntil").value);
			var bishValue = parseInt(document.getElementById("bish").value);
			var boshValue = parseInt(document.getElementById("bosh").value);

			
			if ((loopCount<=0) || (bishValue<=0)  || (boshValue<=0))
			{
				document.getElementById("demo").innerHTML = " Input should not be less than or equal to zero";
			}
			else if ((loopCount < bishValue) || (loopCount < boshValue)) 
			{
				document.getElementById("demo").innerHTML = " Loopcount value is less than the Bish or Bosh value";
			}
			else 
			{
				var text = "";
				for(var i=1; i<=loopCount;i++)
				{
						if ((i % bishValue == 0) && (i % boshValue == 0))
						{
							text += "Bish-Bosh" + "<br>";	
						}
						else if((i %bishValue == 0))
						{
							text += "Bish" + "<br>";
						}
						else if((i %boshValue == 0))
						{
							text += "bosh" + "<br>"
						}
						else
						{
							text+= i + "<br>"	
						}
				}

				 document.getElementById("demo").innerHTML = text;

			}

	}

