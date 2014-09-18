function DiamondSquare(map, x1, y1, x2, y2, range){
			var c1 = x2 - x1;
			var c2 = y2 - y1;
			var hx = c1/2;
			var hy = c2/2;
			
			if((c1 <= 1) || (c2 <= 1)){
				return;
			}
			
			var a = map[x1][y1];
			var b = map[x2][y1];
			var c = map[x1][y2];
			var d = map[x2][y2];
			var e = (a + b + c + d) / 4 + Math.random() * range;
			map[x1 + hx][y1 + hy] = Math.ceil(e);
			
			var f = (a + c + e) / 3 + Math.random() * range;
			map[x1][y1 + hy] = Math.ceil(f);
			var g = (a + b + e) / 3 + Math.random() * range;
			map[x1 + hx][y1] = Math.ceil(g);
			var h = (b + d + e) / 3 + Math.random() * range;
			map[x2][y1 + hy] = Math.ceil(h);
			var i = (c + d + e) / 3 + Math.random() * range;
			map[x1 + hx][y2] = Math.ceil(i);
			
			DiamondSquare(world, x1, y1, x1+hx, y1 + hy, range / 2);
			DiamondSquare(world, x1 + hx, y1, x2, y1 + hy, range / 2);
			DiamondSquare(world, x1, y1 + hy, x1 + hx, y2, range / 2);
			DiamondSquare(world, x1 + hx, y1 + hy, x2, y2, range / 2);
 		}
