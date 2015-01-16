function Grid(rows, columns){
	this.rows=8;
	this.columns=8;
	this.gridStructure = [];

	if(rows){
		this.rows = rows;
	}else{
		this.rows = 8;
	}

	if(columns){
		this.columns = columns;
	}else{
		this.columns = 8;
	}

	for(i = 0; i < this.rows; i++){
		this.gridStructure[i] = [];

		for(j = 0; j < this.columns; j++){
			this.gridStructure[i][j] = [];
		}
	}

}



Grid.prototype.check = function(clickedSquare, color){
	console.log("Current Location:"+clickedSquare);
	
		if(this.gridStructure[clickedSquare[0]][clickedSquare[1]].length == 0){
		return true;
	}
	else{
		var popObj = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
		if(popObj.color == color){
		  this.gridStructure[clickedSquare[0]][clickedSquare[1]].push(popObj);
			return true;
		}
		else{
			this.gridStructure[clickedSquare[0]][clickedSquare[1]].push(popObj);
			return false;
		}
	}
	

}

Grid.prototype.update = function(clickedSquare, orb){
	if(test)
	{
	console.log("In grid update");
	console.log("cur location"+clickedSquare);
	display();
	//endConditionTest(orb);
	if((clickedSquare[0]<=grid.rows) && (clickedSquare[1]<=grid.columns))
	{
	if(this.gridStructure[clickedSquare[0]][clickedSquare[1]].length == 0)
	{
	this.gridStructure[clickedSquare[0]][clickedSquare[1]].push(orb);
	}
	else{
			var ob;
			for(ob=0; ob<this.gridStructure[clickedSquare[0]][clickedSquare[1]].length; ob+=1)
			{
				this.gridStructure[clickedSquare[0]][clickedSquare[1]][ob].color = orb.color;
			}
			grid.checkSquareType(clickedSquare, orb);
		}
	}
	endConditionTest(orb);
	}

}

Grid.prototype.checkSquareType = function(clickedSquare, orb)
{
	if(test)
	{
	if ((clickedSquare[0] == 0) || (clickedSquare[0] == this.rows) || (clickedSquare[0] == this.columns))
	{
		if ((clickedSquare[1] == 0) || (clickedSquare[1] == this.rows) || (clickedSquare[1] == this.columns))
		{
			grid.corner(clickedSquare, orb);
		}
		else 
			grid.edge(clickedSquare, orb, 1);
	}
	else 
	{
		if ((clickedSquare[1] == 0) || (clickedSquare[1] == this.rows) || (clickedSquare[1] == this.columns))
		{
			grid.edge(clickedSquare, orb, 2);
		}
		else
		{
			grid.middle (clickedSquare, orb);
		}
	}
}
	//Stop condition
}

Grid.prototype.corner = function(clickedSquare, orb){
	if(test)
	{
	if (clickedSquare[0] == 0){
		if (clickedSquare[1] == 0){
			var popObj = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
			grid.update([clickedSquare[0], Number(clickedSquare[1])+1], popObj);
			grid.update([Number(clickedSquare[0])+1, clickedSquare[1]], orb);
		}
		else{
			var popObj = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
			grid.update([Number(clickedSquare[0])+1, clickedSquare[1]], popObj);
			grid.update([clickedSquare[0], Number(clickedSquare[1])-1], orb);
		}
	}
	else{
		if(clickedSquare[1] == 0){
			var popObj = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
			grid.update([clickedSquare[0], Number(clickedSquare[1])+1], popObj);
			grid.update([Number(clickedSquare[0])-1, clickedSquare[1]], orb);
		}
		else{
			var popObj = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
			grid.update([clickedSquare[0], clickedSquare[1]-1], popObj);
			grid.update([clickedSquare[0]-1, clickedSquare[1]], orb);
		}
	}
}
}


Grid.prototype.edge = function(clickedSquare, orb, r){
	if(test)
	{
	if(this.gridStructure[clickedSquare[0]][clickedSquare[1]].length == 1){
		this.gridStructure[clickedSquare[0]][clickedSquare[1]].push(orb);
	}
	else{
		if(r == 1){
			if(clickedSquare[0] == 0){
				var popObj = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
				var popObj1 = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
				grid.update([Number(clickedSquare[0])+1, clickedSquare[1]], orb);
				grid.update([clickedSquare[0], Number(clickedSquare[1])+1], popObj);
				grid.update([clickedSquare[0], Number(clickedSquare[1])-1], popObj1);
			}
			else{
				var popObj = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
				var popObj1 = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
				grid.update([Number(clickedSquare[0])-1, clickedSquare[1]], orb);
				grid.update([clickedSquare[0], Number(clickedSquare[1])+1], popObj);
				grid.update([clickedSquare[0], Number(clickedSquare[1])-1], popObj1);
			}
		}
		else{
			if(clickedSquare[1] == 0){
				var popObj = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
				var popObj1 = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
				grid.update([clickedSquare[0], Number(clickedSquare[1])+1], orb);
				grid.update([Number(clickedSquare[0])+1, clickedSquare[1]], popObj);
				grid.update([Number(clickedSquare[0])-1, clickedSquare[1]], popObj1);
			}
			else{
				var popObj = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
				var popObj1 = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
				grid.update([clickedSquare[0], clickedSquare[1]-1], orb);
				grid.update([clickedSquare[0]+1, clickedSquare[1]], popObj);
				grid.update([clickedSquare[0]-1, clickedSquare[1]], popObj1);
			}
		}
	}
}
}


Grid.prototype.middle = function(clickedSquare, orb){
	if(test)
	{
	if((this.gridStructure[clickedSquare[0]][clickedSquare[1]].length == 1)||(this.gridStructure[clickedSquare[0]][clickedSquare[1]].length == 2)){
		this.gridStructure[clickedSquare[0]][clickedSquare[1]].push(orb);
	}
	else{
		var popObj = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
		var popObj1 = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
		var popObj2 = grid.gridStructure[clickedSquare[0]][clickedSquare[1]].pop();
		grid.update([clickedSquare[0], Number(clickedSquare[1])-Number(1)], popObj);
		grid.update([clickedSquare[0], Number(clickedSquare[1])+Number(1)], orb);
		grid.update([Number(clickedSquare[0])+Number(1), clickedSquare[1]], popObj1);
		grid.update([Number(clickedSquare[0])-Number(1), clickedSquare[1]], popObj2);
	}
}
}








//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

function Player(ccolor) //ccolor is color sent by controller
{
	this.color=ccolor;

}

Player.prototype.add= function(clickedSquare)
{ 
	if(grid.check(clickedSquare, this.color)){
		var orb = new Orb(this.color);
		grid.update(clickedSquare, orb);
		return true;
	}
	else 
	{
		return false;
	}
}

var grid= new Grid();
var player1= new Player("red");
var player2= new Player("blue");


function Orb(pcolor) //color sent by Player
{
	this.color=pcolor;

}





