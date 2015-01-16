
var count = 0;
var test = true;
var padx=0;
var pady=0;
function control(coord)
{
	if((count % 2)==0)
	{
		var retval = player1.add(coord);
		endConditionTest();

		if(retval)
		{
			count += 1;
		}
		display();
	}
	else
	{
		var retval = player2.add(coord);
		endConditionTest();
		
		if(retval)
		{
			count += 1;
		}
		display();
	}
	
}


function endConditionTest(orb)
{
	if(test)
	{
	if(Number(count) != 1)
	{
		if(Number(count) != 0)
		{
			var redCount = 0;
			var blueCount = 0;
			for(var i=0; i<=grid.rows; i++)
			{
				for(var j=0; j<=grid.columns; j++)
				{
					if(grid.gridStructure[i][j].length > 0)
					{
						var popObj = grid.gridStructure[i][j].pop();
						if(popObj.color == "red")
						{
							redCount+=1;
						}
						else
						{
							blueCount+=1;
						}
						grid.gridStructure[i][j].push(popObj);
					}
					
				}
			}

			if(orb)
			{
				if(orb.color == "red")
				{
					redCount+=1;
				}
				if(orb.color == "blue")
				{
					blueCount+=1;
				}
			}
			if(blueCount == 0)
			{
				display();
				alert("Red Player wins");
				display();
				test = false;
			}
			else
			{
				if(redCount == 0)
				{
					display();
					alert("Blue Player wins");
					display();
					test = false;
				}
			}
		}
	}
}
}


function display()
{
	var i;
	var j;
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.font = "12px Ariel";
	for(i=0; i<=grid.columns; i++)
	{
		for(j=0; j<=grid.rows; j++)
		{
			ctx.clearRect((0+(j*pady)), (0+(i*padx)), padx, pady);
		}
	}

	for(i=0; i<=400; i+=pady)
	{
		ctx.moveTo(0,i);
		ctx.lineTo(400,i);
		ctx.stroke();
	}
	ctx.moveTo(0,400);
	ctx.lineTo(400,400);
	ctx.stroke();

	for(j=0; j<=400; j+=padx)
	{
		ctx.moveTo(j,0);
		ctx.lineTo(j,400);
		ctx.stroke();
	}
	ctx.moveTo(400,0);
	ctx.lineTo(400,400);
	ctx.stroke();

	for(i=0; i<=grid.columns; i++)
	{
		for(j=0; j<=grid.rows; j++)
		{
			ctx.textAlign = "start";
			if(grid.gridStructure[i][j].length > 0)
			{
				var popObj = grid.gridStructure[i][j].pop();
				
				
				ctx.fillStyle = popObj.color;
				ctx.fillRect((i*padx)+5, (j*pady)+5, padx-10, pady-10);
				grid.gridStructure[i][j].push(popObj);
			}
		}
	}

	for(i=0; i<=grid.columns; i++)
	{
		for(j=0; j<=grid.rows; j++)
		{
			ctx.textAlign = "start";
			if(grid.gridStructure[i][j].length > 0)
			{
				var popObj = grid.gridStructure[i][j].pop();
				if(popObj.color == "blue")
				{
					ctx.fillStyle = "#FDA501"
				}
				else if(popObj.color == "red")
				{
					ctx.fillStyle = "#01FDF1"
				}
				grid.gridStructure[i][j].push(popObj);
				ctx.font="20px Georgia";
				ctx.fillText(grid.gridStructure[i][j].length, ((padx/2)-5+(padx*i)), ((j*pady)+(pady/2)+5));
			}
		}
	}
}









function showCoords(evt) 
{
		var element = document.getElementById("myCanvas");
    var x = evt.pageX - element.offsetLeft;
    var y = evt.pageY - element.offsetTop;
    var coords = "X coords: " + x + ", Y coords: " + y;
    control([Math.floor(x/padx),Math.floor(y/pady)]);
    display();
}



var aa;
var bb;

function mDown()
{
		// count = 0;
		// test = true;

		if(count == 0)
		{
			aa = document.getElementById("columnInput").value;
			if(!((aa<9 && aa>0)))
			{
				aa = 8;
			}
			
			//alert("Xpos: " + aa + "YPos:" + bb);
			grid.rows = aa-1;
			grid.columns = aa-1;
			//alert("rows: " + grid.rows + "YPos:" + grid.columns);
		}

		// else
		// {
			
		// }
		document.getElementById("myButton").disabled = true;
		
  		padx = 400/(grid.rows+1);
		pady = 400/(grid.columns+1);
		display();

}