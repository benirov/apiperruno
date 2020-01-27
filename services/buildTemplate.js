'use strict';

function buildTemplate(type, data, token)
{
	console.log(data);

	// case 1: nueva mascota agregada
	// case 1: tu perro ya tiene un interesado
	let HTML;

	switch(type)
	{
		case 1:

		HTML =  '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">'+
					'<html>'+
						'<head>'+
					    	'<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />'+
					    	'<title>[SUBJECT]</title>'+
					    	'<style type="text/css">'+
						    	'body {background: #ffffff; font-family: Georgia, serif; margin:0; padding:0;}'+
						        'p {margin-bottom: 15px;margin-top: 0px; padding:0; line-height:150%; color:#1e2d59; font-size:16px; font-family: Georgia, serif; font-weight: normal;}'+
						        'ul {margin-bottom: 15px;margin-top: 0px; padding:0; list-style-type: none;}'+
						        'li {margin: 0px; padding:0; line-height:150%; color:#1e2d59; font-size:13px; font-family: Georgia, serif; font-weight: normal;}'+
						        'a {margin: 0; color:#1e2d59;text-decoration: underline; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; line-height: 150%; font-weight: bold; font-size: 13px; display: inline-block;}'+
						        'h1 {margin-bottom: 15px;margin-top: 0px; padding:0; line-height:150%; color:#1e2d59; font-size:24px; font-family: Georgia, serif; font-weight: bold; font-style: italic;}'+
						        'h2 {margin-bottom: 24px;margin-top: 24px; padding:0; color:#1e2d59; font-size:18px; font-family: Georgia, serif;font-weight: bold;line-height:150%;}'+
						        'h3 {margin-bottom: 15px;margin-top: 0px; padding:0; color:#1e2d59; font-size:16px; font-family: Georgia, serif;font-weight: bold;line-height:150%;}'+
						        '.bgItem {'+
						        	'background-color:#dff0ed;'+
						        '}'+
						        '.bgBody {'+
						        	'background-color: #FFFFFF;'+
						        '}'+
					        '</style>'+
						'</head>'+

						'<body>'+
							'<div style="background-color: #dff0ed; width: 100%; height: 230px">'+
								'<div class="contentEditable" style="background-color: #dff0ed; padding-top: 50px;"">'+
									'<center>'+
										'<img src="https://pbs.twimg.com/media/Ds8N6dzXgAYkpoY.jpg" width="150" height="150" style="margin:0; padding:0;  border-radius: 12px;" data-max-width="500">	'+
									'</center>'+
					            '</div>'+
							'</div>'+
							'<!-- contenido -->'+
							'<div style="background-color: #dff0ed; width: 80%; height: 450px; padding-top: 10px; margin: auto; margin-top: 20px; border-radius: 10px;padding-top: 35px; padding-left: 10px;" >'+
								'<div style="width: 100%; text-align:center;">'+
									'<div style="">'+
									'<img src="https://i.pinimg.com/originals/8e/1d/9c/8e1d9c23c74db0505be1ccb7a52d76d7.jpg" width="200" style="border-radius: 10px;" data-max-width="200">'+
								  	'</div>'+
								  	'<div class="info" style="">'+
								  		'<div>'+
								  			'<center>'+
											'<h1 style="font-family: fantasy;">¡Enhorabuena!</h1>'+
										'</center>'+
								  		'</div>'+
								  		'<div>'+
								  			'<h3>te has registrado satisfactoriamente en nuestra plataforma</h3>'+
								  		'</div>'+
								  		'<div style="margin: 20px;">'+
								  			'<p>'+
								  				'Hola '+data.userName+', gracias por registrarte! por favor confirma tu correo dando click al siguiente boton : '+
								  			'</p>'+
								  		'</div>'+
								  			'<div class="contentEditable">'+
								    		'<p>'+
					                    	'<a target="_blank" href="http://localhost:8080/api/email/'+token+'" style="background:#1e2d59;color:#FFFFFF; padding:10px 16px;text-decoration:none; font-size:16px;line-height:150%; font-weight: normal;">confirmar correo</a>'+
					                	'</p>'+
								  		'</div>'+
							    		
							  		'</div>'+
								'</div>'+
							'</div>'+
								
							'</div>'+
							'<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="bgBody" valign="top">'+
							  	'<tr>'+
							    	'<td align="center" class="movableContentContainer">'+
							      		'<div class="movableContent">'+
							      	        '<table align="center" border="0" cellpadding="0" cellspacing="0" width="500">'+
							      	            '<tbody>'+
							      	            	'<tr>'+
							      	            		'<td align="center" colspan="3" height="10px;">'+
							      	                  	'</td>'+
							      	                '</tr>'+
							      	            '</tbody>'+
							      	        '</table>'+
							      	    '</div>							      	'+
							      	'<div class="movableContent">'+
							      	    '<table align="center" width="500" cellpadding="0" style="margin:0; border-spacing: 0px;" cellspacing="0" border="0" >'+
							      	      '<tr>'+
							      	        '<td height="10">'+
							      	        '</td>'+
							      	      '</tr>'+
							      	    '</table>'+
							      	'</div>'+							      	
							      		'<div class="movableContent">'+
							      	        '<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F2F2F2;">'+
							      	            '<tr>'+
							      	            	'<td style="background-color: #FFFFFF;" height="10">'+
							      	            	'</td>'+
							      	            '</tr>'+
							      	            '<tr>'+
							      	            	'<td height="20">'+
							      	            	'</td>'+
							      	            '</tr>'+
							      	            '<tr>'+
							      	            	'<td align="center">'+
							      	            		'<table align="center" border="0" cellpadding="0" cellspacing="0" width="290" style="background-color: #F2F2F2;">'+
							      	            			'<tr>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentFacebookEditable" >'+
										      	          				'<div class="contentEditable">'+
										      	          					'<img src="imgs/facebook.png" data-default="placeholder" data-max-width="25" data-customIcon="true" width="25">'+
										      	          				'</div>'+
										      	          			'</div>'+
										      	          		'</td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentTwitterEditable" >'+
										      	          				'<div class="contentEditable">'+
										      	          					'<img src="imgs/twitter.png" data-default="placeholder" data-max-width="25" data-customIcon="true" width="25">'+
										      	          				'</div>'+
										      	          			'</div>'+
										      	          		'</td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentImageEditable" >'+
										      	          				'<div class="contentEditable">'+
										      	          					'<img src="imgs/pinterest.png" data-max-width="25" width="25">'+
										      	          				'</div>'+
										      	          			'</div>'+
										      	          		'</td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentImageEditable" >'+
										      	          				'<div class="contentEditable">'+
										      	          					'<img src="imgs/youtube.png" data-max-width="25" width="25">'+
										      	          				'</div>'+
										      	          			'</div>'+
										      	          		'</td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentImageEditable" >'+
										      	          				'<div class="contentEditable">'+
										      	          					'<img src="imgs/instagram.png" data-max-width="25" width="25">'+
										      	          				'</div>'+
										      	          			'</div>'+
										      	          		'</td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentImageEditable" >'+
										      	          				'<div class="contentEditable">'+
										      	          					'<img src="imgs/googleplus.png" data-max-width="25" width="25">'+
										      	          				'</div>'+
										      	          			'</div>'+
										      	          		'</td>'+
							      	            			'</tr>'+
							      	            		'</table>'+
							      	            	'</td>'+
							      	        	'</tr>'+
							      	        	'<tr>'+
							      	        		'<td height="10">'+
							      	        		'</td>'+
							      	        	'</tr>'+
							      	        	'<tr>'+
							      	        		'<td align="center">'+
							      	        			'<table align="center" border="0" cellpadding="0" cellspacing="0" width="290" style="background-color: #F2F2F2;">'+
							      	            			'<tr>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentTextEditable">'+
							      	            						'<div class="contentEditable">'+
							      	            							'<p>'+
							      	            								'<a target="_blank" href="[CLIENTS.WEBSITE]" style="text-align:center; text-decoration:none; color: #747474; font-size: 12px;">Visit website</a>'+
							      	            							'</p>'+
							      	            						'</div>'+
							      	            					'</div>'+
							      	            				'</td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentTextEditable">'+
							      	            						'<div class="contentEditable">'+
							      	            							'<p>'+
							      	            								'<a target="_blank" href="[FORWARD]" style="text-align:center; text-decoration:none; color: #747474; font-size: 12px;">Forward to a Friend</a>'+
							      	            							'</p>'+
							      	            						'</div>'+
							      	            					'</div>'+
							      	            				'</td>'+
							      	            			'</tr>'+
							      	            		'</table>'+
							      	        		'</td>'+
							      	        	'</tr>'+
							      	        	'<tr>'+
							      	        		'<td height="20">'+
							      	        		'</td>'+
							      	        	'</tr>'+
							      	        '</table>'+
							      	    '</div>'+
								  	'</td>'+
								'</tr>'+
							'</table>'+

						'</body>'+
					'</html>';

		break;

		case 2:
		HTML =  '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">'+
					'<html>'+
						'<head>'+
					    	'<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />'+
					    	'<title>[SUBJECT]</title>'+
					    	'<style type="text/css">'+
						    	'body {background: #ffffff; font-family: Georgia, serif; margin:0; padding:0;}'+
						        'p {margin-bottom: 15px;margin-top: 0px; padding:0; line-height:150%; color:#1e2d59; font-size:16px; font-family: Georgia, serif; font-weight: normal;}'+
						        'ul {margin-bottom: 15px;margin-top: 0px; padding:0; list-style-type: none;}'+
						        'li {margin: 0px; padding:0; line-height:150%; color:#1e2d59; font-size:13px; font-family: Georgia, serif; font-weight: normal;}'+
						        'a {margin: 0; color:#1e2d59;text-decoration: underline; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; line-height: 150%; font-weight: bold; font-size: 13px; display: inline-block;}'+
						        'h1 {margin-bottom: 15px;margin-top: 0px; padding:0; line-height:150%; color:#1e2d59; font-size:24px; font-family: Georgia, serif; font-weight: bold; font-style: italic;}'+
						        'h2 {margin-bottom: 24px;margin-top: 24px; padding:0; color:#1e2d59; font-size:18px; font-family: Georgia, serif;font-weight: bold;line-height:150%;}'+
						        'h3 {margin-bottom: 15px;margin-top: 0px; padding:0; color:#1e2d59; font-size:16px; font-family: Georgia, serif;font-weight: bold;line-height:150%;}'+
						        '.bgItem {'+
						        	'background-color:#dff0ed;'+
						        '}'+
						        '.bgBody {'+
						        	'background-color: #FFFFFF;'+
						        '}'+
					        '</style>'+
						'</head>'+

						'<body>'+
							'<div style="background-color: #dff0ed; width: 100%; height: 230px">'+
								'<div class="contentEditable" style="background-color: #dff0ed; padding-top: 50px;"">'+
									'<center>'+
										'<img src="imgs/logo.png" width="150" height="150" style="margin:0; padding:0;  border-radius: 12px;" data-max-width="500">	'+
									'</center>'+
					            '</div>'+
							'</div>'+
							'<!-- contenido -->'+
							'<div style="background-color: #dff0ed; width: 80%; height: 450px; padding-top: 10px; margin: auto; margin-top: 20px; border-radius: 10px;padding-top: 35px; padding-left: 10px;" >'+
								'<div style="width: 100%; text-align:center;">'+
									'<div style="">'+
									'<img src="imgs/Placeholder_1.png" width="200" style="border-radius: 10px;" data-max-width="200">'+
								  	'</div>'+
								  	'<div class="info" style="">'+
								  		'<div>'+
								  			'<center>'+
											'<h1 style="font-family: fantasy;">'+data.nameDog+'</h1>'+
										'</center>'+
								  		'</div>'+
								  		'<div>'+
								  			'<h3>'+data.titleDog+'</h3>'+
								  		'</div>'+
								  		'<div style="margin: 20px;">'+
								  			'<p>'+data.medicalInfo.additionalInfo+'</p>'+
								  		'</div>'+
								  			'<div class="contentEditable">'+
								    		'<p>'+
					                    	'<a target="http://localhost:8080/api/viewdog/'+data._id+'" href="#" style="background:#1e2d59;color:#FFFFFF; padding:10px 16px;text-decoration:none; font-size:16px;line-height:150%; font-weight: normal;">open</a>'+
					                	'</p>'+
								  		'</div>'+
							    		
							  		'</div>'+
								'</div>'+
							'</div>'+
								
							'</div>'+
							'<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="bgBody" valign="top">'+
							  	'<tr>'+
							    	'<td align="center" class="movableContentContainer">'+
							      		'<div class="movableContent">'+
							      	        '<table align="center" border="0" cellpadding="0" cellspacing="0" width="500">'+
							      	            '<tbody>'+
							      	            	'<tr>'+
							      	            		'<td align="center" colspan="3" height="10px;">'+
							      	                  	'</td>'+
							      	                '</tr>'+
							      	            '</tbody>'+
							      	        '</table>'+
							      	    '</div>							      	'+
							      	'<div class="movableContent">'+
							      	    '<table align="center" width="500" cellpadding="0" style="margin:0; border-spacing: 0px;" cellspacing="0" border="0" >'+
							      	      '<tr>'+
							      	        '<td height="10">'+
							      	        '</td>'+
							      	      '</tr>'+
							      	    '</table>'+
							      	'</div>'+							      	
							      		'<div class="movableContent">'+
							      	        '<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F2F2F2;">'+
							      	            '<tr>'+
							      	            	'<td style="background-color: #FFFFFF;" height="10">'+
							      	            	'</td>'+
							      	            '</tr>'+
							      	            '<tr>'+
							      	            	'<td height="20">'+
							      	            	'</td>'+
							      	            '</tr>'+
							      	            '<tr>'+
							      	            	'<td align="center">'+
							      	            		'<table align="center" border="0" cellpadding="0" cellspacing="0" width="290" style="background-color: #F2F2F2;">'+
							      	            			'<tr>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentFacebookEditable" >'+
										      	          				'<div class="contentEditable">'+
										      	          					'<img src="imgs/facebook.png" data-default="placeholder" data-max-width="25" data-customIcon="true" width="25">'+
										      	          				'</div>'+
										      	          			'</div>'+
										      	          		'</td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentTwitterEditable" >'+
										      	          				'<div class="contentEditable">'+
										      	          					'<img src="imgs/twitter.png" data-default="placeholder" data-max-width="25" data-customIcon="true" width="25">'+
										      	          				'</div>'+
										      	          			'</div>'+
										      	          		'</td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentImageEditable" >'+
										      	          				'<div class="contentEditable">'+
										      	          					'<img src="imgs/pinterest.png" data-max-width="25" width="25">'+
										      	          				'</div>'+
										      	          			'</div>'+
										      	          		'</td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentImageEditable" >'+
										      	          				'<div class="contentEditable">'+
										      	          					'<img src="imgs/youtube.png" data-max-width="25" width="25">'+
										      	          				'</div>'+
										      	          			'</div>'+
										      	          		'</td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentImageEditable" >'+
										      	          				'<div class="contentEditable">'+
										      	          					'<img src="imgs/instagram.png" data-max-width="25" width="25">'+
										      	          				'</div>'+
										      	          			'</div>'+
										      	          		'</td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentImageEditable" >'+
										      	          				'<div class="contentEditable">'+
										      	          					'<img src="imgs/googleplus.png" data-max-width="25" width="25">'+
										      	          				'</div>'+
										      	          			'</div>'+
										      	          		'</td>'+
							      	            			'</tr>'+
							      	            		'</table>'+
							      	            	'</td>'+
							      	        	'</tr>'+
							      	        	'<tr>'+
							      	        		'<td height="10">'+
							      	        		'</td>'+
							      	        	'</tr>'+
							      	        	'<tr>'+
							      	        		'<td align="center">'+
							      	        			'<table align="center" border="0" cellpadding="0" cellspacing="0" width="290" style="background-color: #F2F2F2;">'+
							      	            			'<tr>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentTextEditable">'+
							      	            						'<div class="contentEditable">'+
							      	            							'<p>'+
							      	            								'<a target="_blank" href="[CLIENTS.WEBSITE]" style="text-align:center; text-decoration:none; color: #747474; font-size: 12px;">Visit website</a>'+
							      	            							'</p>'+
							      	            						'</div>'+
							      	            					'</div>'+
							      	            				'</td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentTextEditable">'+
							      	            						'<div class="contentEditable">'+
							      	            							'<p>'+
							      	            								'<a target="_blank" href="[FORWARD]" style="text-align:center; text-decoration:none; color: #747474; font-size: 12px;">Forward to a Friend</a>'+
							      	            							'</p>'+
							      	            						'</div>'+
							      	            					'</div>'+
							      	            				'</td>'+
							      	            			'</tr>'+
							      	            		'</table>'+
							      	        		'</td>'+
							      	        	'</tr>'+
							      	        	'<tr>'+
							      	        		'<td height="20">'+
							      	        		'</td>'+
							      	        	'</tr>'+
							      	        '</table>'+
							      	    '</div>'+
								  	'</td>'+
								'</tr>'+
							'</table>'+

						'</body>'+
					'</html>';

		break;

		case 3:

		HTML =  '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">'+
					'<html>'+
						'<head>'+
					    	'<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />'+
					    	'<title>[SUBJECT]</title>'+
					    	'<style type="text/css">'+
						    	'body {background: #ffffff; font-family: Georgia, serif; margin:0; padding:0;}'+
						        'p {margin-bottom: 15px;margin-top: 0px; padding:0; line-height:150%; color:#1e2d59; font-size:16px; font-family: Georgia, serif; font-weight: normal;}'+
						        'ul {margin-bottom: 15px;margin-top: 0px; padding:0; list-style-type: none;}'+
						        'li {margin: 0px; padding:0; line-height:150%; color:#1e2d59; font-size:13px; font-family: Georgia, serif; font-weight: normal;}'+
						        'a {margin: 0; color:#1e2d59;text-decoration: underline; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; line-height: 150%; font-weight: bold; font-size: 13px; display: inline-block;}'+
						        'h1 {margin-bottom: 15px;margin-top: 0px; padding:0; line-height:150%; color:#1e2d59; font-size:24px; font-family: Georgia, serif; font-weight: bold; font-style: italic;}'+
						        'h2 {margin-bottom: 24px;margin-top: 24px; padding:0; color:#1e2d59; font-size:18px; font-family: Georgia, serif;font-weight: bold;line-height:150%;}'+
						        'h3 {margin-bottom: 15px;margin-top: 0px; padding:0; color:#1e2d59; font-size:16px; font-family: Georgia, serif;font-weight: bold;line-height:150%;}'+
						        '.bgItem {'+
						        	'background-color:#dff0ed;'+
						        '}'+
						        '.bgBody {'+
						        	'background-color: #FFFFFF;'+
						        '}'+
					        '</style>'+
						'</head>'+

						'<body>'+
							'<div style="background-color: #dff0ed; width: 100%; height: 230px">'+
								'<div class="contentEditable" style="background-color: #dff0ed; padding-top: 50px;"">'+
									'<center>'+
										'<img src="https://pbs.twimg.com/media/Ds8N6dzXgAYkpoY.jpg" width="150" height="150" style="margin:0; padding:0;  border-radius: 12px;" data-max-width="500">	'+
									'</center>'+
					            '</div>'+
							'</div>'+
							'<!-- contenido -->'+
							'<div style="background-color: #dff0ed; width: 80%; height: 450px; padding-top: 10px; margin: auto; margin-top: 20px; border-radius: 10px;padding-top: 35px; padding-left: 10px;" >'+
								'<div style="width: 100%; text-align:center;">'+
									'<div style="">'+
									'<img src="https://i.pinimg.com/originals/8e/1d/9c/8e1d9c23c74db0505be1ccb7a52d76d7.jpg" width="200" style="border-radius: 10px;" data-max-width="200">'+
								  	'</div>'+
								  	'<div class="info" style="">'+
								  		'<div>'+
								  			'<center>'+
											'<h1 style="font-family: fantasy;">¡Enhorabuena!</h1>'+
										'</center>'+
								  		'</div>'+
								  		'<div>'+
								  			'<h3>Tu mascota '+data.nameDog+' tiene interesado para adopciòn'+
								  		'</div>'+
								  		'<div style="margin: 20px;">'+
								  			'<p>'+
								  				'dale click al siguiente boton para seguir el caso y aprobar/rechazar a la persona interesada :'+
								  			'</p>'+
								  		'</div>'+
								  			'<div class="contentEditable">'+
								    		'<p>'+
					                    	'<a target="_blank" href="http://localhost:8080/user/case" style="background:#1e2d59;color:#FFFFFF; padding:10px 16px;text-decoration:none; font-size:16px;line-height:150%; font-weight: normal;">Ver caso</a>'+
					                	'</p>'+
								  		'</div>'+
							    		
							  		'</div>'+
								'</div>'+
							'</div>'+
								
							'</div>'+
							'<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="bgBody" valign="top">'+
							  	'<tr>'+
							    	'<td align="center" class="movableContentContainer">'+
							      		'<div class="movableContent">'+
							      	        '<table align="center" border="0" cellpadding="0" cellspacing="0" width="500">'+
							      	            '<tbody>'+
							      	            	'<tr>'+
							      	            		'<td align="center" colspan="3" height="10px;">'+
							      	                  	'</td>'+
							      	                '</tr>'+
							      	            '</tbody>'+
							      	        '</table>'+
							      	    '</div>							      	'+
							      	'<div class="movableContent">'+
							      	    '<table align="center" width="500" cellpadding="0" style="margin:0; border-spacing: 0px;" cellspacing="0" border="0" >'+
							      	      '<tr>'+
							      	        '<td height="10">'+
							      	        '</td>'+
							      	      '</tr>'+
							      	    '</table>'+
							      	'</div>'+							      	
							      		'<div class="movableContent">'+
							      	        '<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F2F2F2;">'+
							      	            '<tr>'+
							      	            	'<td style="background-color: #FFFFFF;" height="10">'+
							      	            	'</td>'+
							      	            '</tr>'+
							      	            '<tr>'+
							      	            	'<td height="20">'+
							      	            	'</td>'+
							      	            '</tr>'+
							      	            '<tr>'+
							      	            	'<td align="center">'+
							      	            		'<table align="center" border="0" cellpadding="0" cellspacing="0" width="290" style="background-color: #F2F2F2;">'+
							      	            			'<tr>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentFacebookEditable" >'+
										      	          				'<div class="contentEditable">'+
										      	          					'<img src="imgs/facebook.png" data-default="placeholder" data-max-width="25" data-customIcon="true" width="25">'+
										      	          				'</div>'+
										      	          			'</div>'+
										      	          		'</td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentTwitterEditable" >'+
										      	          				'<div class="contentEditable">'+
										      	          					'<img src="imgs/twitter.png" data-default="placeholder" data-max-width="25" data-customIcon="true" width="25">'+
										      	          				'</div>'+
										      	          			'</div>'+
										      	          		'</td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentImageEditable" >'+
										      	          				'<div class="contentEditable">'+
										      	          					'<img src="imgs/pinterest.png" data-max-width="25" width="25">'+
										      	          				'</div>'+
										      	          			'</div>'+
										      	          		'</td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentImageEditable" >'+
										      	          				'<div class="contentEditable">'+
										      	          					'<img src="imgs/youtube.png" data-max-width="25" width="25">'+
										      	          				'</div>'+
										      	          			'</div>'+
										      	          		'</td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentImageEditable" >'+
										      	          				'<div class="contentEditable">'+
										      	          					'<img src="imgs/instagram.png" data-max-width="25" width="25">'+
										      	          				'</div>'+
										      	          			'</div>'+
										      	          		'</td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentImageEditable" >'+
										      	          				'<div class="contentEditable">'+
										      	          					'<img src="imgs/googleplus.png" data-max-width="25" width="25">'+
										      	          				'</div>'+
										      	          			'</div>'+
										      	          		'</td>'+
							      	            			'</tr>'+
							      	            		'</table>'+
							      	            	'</td>'+
							      	        	'</tr>'+
							      	        	'<tr>'+
							      	        		'<td height="10">'+
							      	        		'</td>'+
							      	        	'</tr>'+
							      	        	'<tr>'+
							      	        		'<td align="center">'+
							      	        			'<table align="center" border="0" cellpadding="0" cellspacing="0" width="290" style="background-color: #F2F2F2;">'+
							      	            			'<tr>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentTextEditable">'+
							      	            						'<div class="contentEditable">'+
							      	            							'<p>'+
							      	            								'<a target="_blank" href="[CLIENTS.WEBSITE]" style="text-align:center; text-decoration:none; color: #747474; font-size: 12px;">Visit website</a>'+
							      	            							'</p>'+
							      	            						'</div>'+
							      	            					'</div>'+
							      	            				'</td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentTextEditable">'+
							      	            						'<div class="contentEditable">'+
							      	            							'<p>'+
							      	            								'<a target="_blank" href="[FORWARD]" style="text-align:center; text-decoration:none; color: #747474; font-size: 12px;">Forward to a Friend</a>'+
							      	            							'</p>'+
							      	            						'</div>'+
							      	            					'</div>'+
							      	            				'</td>'+
							      	            			'</tr>'+
							      	            		'</table>'+
							      	        		'</td>'+
							      	        	'</tr>'+
							      	        	'<tr>'+
							      	        		'<td height="20">'+
							      	        		'</td>'+
							      	        	'</tr>'+
							      	        '</table>'+
							      	    '</div>'+
								  	'</td>'+
								'</tr>'+
							'</table>'+

						'</body>'+
					'</html>';


		break;

		case 4:

		HTML =  '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">'+
					'<html>'+
						'<head>'+
					    	'<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />'+
					    	'<title>[SUBJECT]</title>'+
					    	'<style type="text/css">'+
						    	'body {background: #ffffff; font-family: Georgia, serif; margin:0; padding:0;}'+
						        'p {margin-bottom: 15px;margin-top: 0px; padding:0; line-height:150%; color:#1e2d59; font-size:16px; font-family: Georgia, serif; font-weight: normal;}'+
						        'ul {margin-bottom: 15px;margin-top: 0px; padding:0; list-style-type: none;}'+
						        'li {margin: 0px; padding:0; line-height:150%; color:#1e2d59; font-size:13px; font-family: Georgia, serif; font-weight: normal;}'+
						        'a {margin: 0; color:#1e2d59;text-decoration: underline; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; line-height: 150%; font-weight: bold; font-size: 13px; display: inline-block;}'+
						        'h1 {margin-bottom: 15px;margin-top: 0px; padding:0; line-height:150%; color:#1e2d59; font-size:24px; font-family: Georgia, serif; font-weight: bold; font-style: italic;}'+
						        'h2 {margin-bottom: 24px;margin-top: 24px; padding:0; color:#1e2d59; font-size:18px; font-family: Georgia, serif;font-weight: bold;line-height:150%;}'+
						        'h3 {margin-bottom: 15px;margin-top: 0px; padding:0; color:#1e2d59; font-size:16px; font-family: Georgia, serif;font-weight: bold;line-height:150%;}'+
						        '.bgItem {'+
						        	'background-color:#dff0ed;'+
						        '}'+
						        '.bgBody {'+
						        	'background-color: #FFFFFF;'+
						        '}'+
					        '</style>'+
						'</head>'+

						'<body>'+
							'<div style="background-color: #dff0ed; width: 100%; height: 230px">'+
								'<div class="contentEditable" style="background-color: #dff0ed; padding-top: 50px;"">'+
									'<center>'+
										'<img src="https://pbs.twimg.com/media/Ds8N6dzXgAYkpoY.jpg" width="150" height="150" style="margin:0; padding:0;  border-radius: 12px;" data-max-width="500">	'+
									'</center>'+
					            '</div>'+
							'</div>'+
							'<!-- contenido -->'+
							'<div style="background-color: #dff0ed; width: 80%; height: 450px; padding-top: 10px; margin: auto; margin-top: 20px; border-radius: 10px;padding-top: 35px; padding-left: 10px;" >'+
								'<div style="width: 100%; text-align:center;">'+
									'<div style="">'+
									'<img src="https://i.pinimg.com/originals/8e/1d/9c/8e1d9c23c74db0505be1ccb7a52d76d7.jpg" width="200" style="border-radius: 10px;" data-max-width="200">'+
								  	'</div>'+
								  	'<div class="info" style="">'+
								  		'<div>'+
								  			'<center>'+
											'<h1 style="font-family: fantasy;">Felicidades!</h1>'+
										'</center>'+
								  		'</div>'+
								  		'<div>'+
								  			'<h3>Ya tienes un nuevo integrante en tu familia'+
								  		'</div>'+
								  		'<div style="margin: 20px;">'+
								  			'<p>'+
								  				'Tu solicitud de adopciòn de la mascota se ha aprobado, que seas muy feliz con tu nuevo amigo y recuerda darle mucho amor y cariño'+
								  			'</p>'+
								  			'<p>'+
								  				'Te compartimos los datos de contacto de  persona que tiene a tu nueva mascota para que finiquites la adopcion: '+
								  			'</p>'+
								  			'<p>'+
								  				'Nombre: '+data.userName+''+
								  			'</p>'+
								  			'<p>'+
								  				'Email: '+data.emailUser+' '+
								  			'</p>'+
								  			'<p>'+
								  				'Nro. Telefono: '+data.phone+' '+
								  			'</p>'+
								  		'</div>'+
							  		'</div>'+
								'</div>'+
							'</div>'+
								
							'</div>'+
							'<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="bgBody" valign="top">'+
							  	'<tr>'+
							    	'<td align="center" class="movableContentContainer">'+
							      		'<div class="movableContent">'+
							      	        '<table align="center" border="0" cellpadding="0" cellspacing="0" width="500">'+
							      	            '<tbody>'+
							      	            	'<tr>'+
							      	            		'<td align="center" colspan="3" height="10px;">'+
							      	                  	'</td>'+
							      	                '</tr>'+
							      	            '</tbody>'+
							      	        '</table>'+
							      	    '</div>							      	'+
							      	'<div class="movableContent">'+
							      	    '<table align="center" width="500" cellpadding="0" style="margin:0; border-spacing: 0px;" cellspacing="0" border="0" >'+
							      	      '<tr>'+
							      	        '<td height="10">'+
							      	        '</td>'+
							      	      '</tr>'+
							      	    '</table>'+
							      	'</div>'+							      	
							      		'<div class="movableContent">'+
							      	        '<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F2F2F2;">'+
							      	            '<tr>'+
							      	            	'<td style="background-color: #FFFFFF;" height="10">'+
							      	            	'</td>'+
							      	            '</tr>'+
							      	            '<tr>'+
							      	            	'<td height="20">'+
							      	            	'</td>'+
							      	            '</tr>'+
							      	            '<tr>'+
							      	            	'<td align="center">'+
							      	            		'<table align="center" border="0" cellpadding="0" cellspacing="0" width="290" style="background-color: #F2F2F2;">'+
							      	            			'<tr>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentFacebookEditable" >'+
										      	          				'<div class="contentEditable">'+
										      	          					'<img src="imgs/facebook.png" data-default="placeholder" data-max-width="25" data-customIcon="true" width="25">'+
										      	          				'</div>'+
										      	          			'</div>'+
										      	          		'</td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentTwitterEditable" >'+
										      	          				'<div class="contentEditable">'+
										      	          					'<img src="imgs/twitter.png" data-default="placeholder" data-max-width="25" data-customIcon="true" width="25">'+
										      	          				'</div>'+
										      	          			'</div>'+
										      	          		'</td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentImageEditable" >'+
										      	          				'<div class="contentEditable">'+
										      	          					'<img src="imgs/pinterest.png" data-max-width="25" width="25">'+
										      	          				'</div>'+
										      	          			'</div>'+
										      	          		'</td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentImageEditable" >'+
										      	          				'<div class="contentEditable">'+
										      	          					'<img src="imgs/youtube.png" data-max-width="25" width="25">'+
										      	          				'</div>'+
										      	          			'</div>'+
										      	          		'</td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentImageEditable" >'+
										      	          				'<div class="contentEditable">'+
										      	          					'<img src="imgs/instagram.png" data-max-width="25" width="25">'+
										      	          				'</div>'+
										      	          			'</div>'+
										      	          		'</td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentImageEditable" >'+
										      	          				'<div class="contentEditable">'+
										      	          					'<img src="imgs/googleplus.png" data-max-width="25" width="25">'+
										      	          				'</div>'+
										      	          			'</div>'+
										      	          		'</td>'+
							      	            			'</tr>'+
							      	            		'</table>'+
							      	            	'</td>'+
							      	        	'</tr>'+
							      	        	'<tr>'+
							      	        		'<td height="10">'+
							      	        		'</td>'+
							      	        	'</tr>'+
							      	        	'<tr>'+
							      	        		'<td align="center">'+
							      	        			'<table align="center" border="0" cellpadding="0" cellspacing="0" width="290" style="background-color: #F2F2F2;">'+
							      	            			'<tr>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentTextEditable">'+
							      	            						'<div class="contentEditable">'+
							      	            							'<p>'+
							      	            								'<a target="_blank" href="[CLIENTS.WEBSITE]" style="text-align:center; text-decoration:none; color: #747474; font-size: 12px;">Visit website</a>'+
							      	            							'</p>'+
							      	            						'</div>'+
							      	            					'</div>'+
							      	            				'</td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentTextEditable">'+
							      	            						'<div class="contentEditable">'+
							      	            							'<p>'+
							      	            								'<a target="_blank" href="[FORWARD]" style="text-align:center; text-decoration:none; color: #747474; font-size: 12px;">Forward to a Friend</a>'+
							      	            							'</p>'+
							      	            						'</div>'+
							      	            					'</div>'+
							      	            				'</td>'+
							      	            			'</tr>'+
							      	            		'</table>'+
							      	        		'</td>'+
							      	        	'</tr>'+
							      	        	'<tr>'+
							      	        		'<td height="20">'+
							      	        		'</td>'+
							      	        	'</tr>'+
							      	        '</table>'+
							      	    '</div>'+
								  	'</td>'+
								'</tr>'+
							'</table>'+

						'</body>'+
					'</html>';


		break;

		case 5:

		HTML =  '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">'+
					'<html>'+
						'<head>'+
					    	'<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />'+
					    	'<title>[SUBJECT]</title>'+
					    	'<style type="text/css">'+
						    	'body {background: #ffffff; font-family: Georgia, serif; margin:0; padding:0;}'+
						        'p {margin-bottom: 15px;margin-top: 0px; padding:0; line-height:150%; color:#1e2d59; font-size:16px; font-family: Georgia, serif; font-weight: normal;}'+
						        'ul {margin-bottom: 15px;margin-top: 0px; padding:0; list-style-type: none;}'+
						        'li {margin: 0px; padding:0; line-height:150%; color:#1e2d59; font-size:13px; font-family: Georgia, serif; font-weight: normal;}'+
						        'a {margin: 0; color:#1e2d59;text-decoration: underline; font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; line-height: 150%; font-weight: bold; font-size: 13px; display: inline-block;}'+
						        'h1 {margin-bottom: 15px;margin-top: 0px; padding:0; line-height:150%; color:#1e2d59; font-size:24px; font-family: Georgia, serif; font-weight: bold; font-style: italic;}'+
						        'h2 {margin-bottom: 24px;margin-top: 24px; padding:0; color:#1e2d59; font-size:18px; font-family: Georgia, serif;font-weight: bold;line-height:150%;}'+
						        'h3 {margin-bottom: 15px;margin-top: 0px; padding:0; color:#1e2d59; font-size:16px; font-family: Georgia, serif;font-weight: bold;line-height:150%;}'+
						        '.bgItem {'+
						        	'background-color:#dff0ed;'+
						        '}'+
						        '.bgBody {'+
						        	'background-color: #FFFFFF;'+
						        '}'+
					        '</style>'+
						'</head>'+

						'<body>'+
							'<div style="background-color: #dff0ed; width: 100%; height: 230px">'+
								'<div class="contentEditable" style="background-color: #dff0ed; padding-top: 50px;"">'+
									'<center>'+
										'<img src="https://pbs.twimg.com/media/Ds8N6dzXgAYkpoY.jpg" width="150" height="150" style="margin:0; padding:0;  border-radius: 12px;" data-max-width="500">	'+
									'</center>'+
					            '</div>'+
							'</div>'+
							'<!-- contenido -->'+
							'<div style="background-color: #dff0ed; width: 80%; height: 450px; padding-top: 10px; margin: auto; margin-top: 20px; border-radius: 10px;padding-top: 35px; padding-left: 10px;" >'+
								'<div style="width: 100%; text-align:center;">'+
									'<div style="">'+
									'<img src="https://i.pinimg.com/originals/8e/1d/9c/8e1d9c23c74db0505be1ccb7a52d76d7.jpg" width="200" style="border-radius: 10px;" data-max-width="200">'+
								  	'</div>'+
								  	'<div class="info" style="">'+
								  		'<div>'+
								  			'<center>'+
											'<h1 style="font-family: fantasy;">proceso de adopciòn rechazado</h1>'+
										'</center>'+
								  		'</div>'+
								  		'<div>'+
								  			'<h3>tu solicitud ha sido rechazada'+
								  		'</div>'+
								  		'<div style="margin: 20px;">'+
								  			'<p>'+
								  				'la solicitud de adopciòn que hiciste por la mascota '+data.nameDog+' no ha sido aprobada, lamentamos que haya sido asi'+
								  			'</p>'+
								  			'<p>'+
								  				'no te desanimes, dale click al boton para ver las mascotas que tenemos en adopciòn, quiza alguna de ellas es lo que buscas. ¡suerte! '+
								  			'</p>'+
								  			'</div>'+
								  			'<div class="contentEditable">'+
								    		'<p>'+
					                    	'<a target="http://localhost:8080/api/dogs/" href="#" style="background:#1e2d59;color:#FFFFFF; padding:10px 16px;text-decoration:none; font-size:16px;line-height:150%; font-weight: normal;">ver mascotas</a>'+
					                	'</p>'+
								  		'</div>'+
								  		'</div>'+
							  		'</div>'+
								'</div>'+
							'</div>'+
								
							'</div>'+
							'<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="bgBody" valign="top">'+
							  	'<tr>'+
							    	'<td align="center" class="movableContentContainer">'+
							      		'<div class="movableContent">'+
							      	        '<table align="center" border="0" cellpadding="0" cellspacing="0" width="500">'+
							      	            '<tbody>'+
							      	            	'<tr>'+
							      	            		'<td align="center" colspan="3" height="10px;">'+
							      	                  	'</td>'+
							      	                '</tr>'+
							      	            '</tbody>'+
							      	        '</table>'+
							      	    '</div>							      	'+
							      	'<div class="movableContent">'+
							      	    '<table align="center" width="500" cellpadding="0" style="margin:0; border-spacing: 0px;" cellspacing="0" border="0" >'+
							      	      '<tr>'+
							      	        '<td height="10">'+
							      	        '</td>'+
							      	      '</tr>'+
							      	    '</table>'+
							      	'</div>'+							      	
							      		'<div class="movableContent">'+
							      	        '<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F2F2F2;">'+
							      	            '<tr>'+
							      	            	'<td style="background-color: #FFFFFF;" height="10">'+
							      	            	'</td>'+
							      	            '</tr>'+
							      	            '<tr>'+
							      	            	'<td height="20">'+
							      	            	'</td>'+
							      	            '</tr>'+
							      	            '<tr>'+
							      	            	'<td align="center">'+
							      	            		'<table align="center" border="0" cellpadding="0" cellspacing="0" width="290" style="background-color: #F2F2F2;">'+
							      	            			'<tr>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentFacebookEditable" >'+
										      	          				'<div class="contentEditable">'+
										      	          					'<img src="imgs/facebook.png" data-default="placeholder" data-max-width="25" data-customIcon="true" width="25">'+
										      	          				'</div>'+
										      	          			'</div>'+
										      	          		'</td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentTwitterEditable" >'+
										      	          				'<div class="contentEditable">'+
										      	          					'<img src="imgs/twitter.png" data-default="placeholder" data-max-width="25" data-customIcon="true" width="25">'+
										      	          				'</div>'+
										      	          			'</div>'+
										      	          		'</td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentImageEditable" >'+
										      	          				'<div class="contentEditable">'+
										      	          					'<img src="imgs/pinterest.png" data-max-width="25" width="25">'+
										      	          				'</div>'+
										      	          			'</div>'+
										      	          		'</td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentImageEditable" >'+
										      	          				'<div class="contentEditable">'+
										      	          					'<img src="imgs/youtube.png" data-max-width="25" width="25">'+
										      	          				'</div>'+
										      	          			'</div>'+
										      	          		'</td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentImageEditable" >'+
										      	          				'<div class="contentEditable">'+
										      	          					'<img src="imgs/instagram.png" data-max-width="25" width="25">'+
										      	          				'</div>'+
										      	          			'</div>'+
										      	          		'</td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentImageEditable" >'+
										      	          				'<div class="contentEditable">'+
										      	          					'<img src="imgs/googleplus.png" data-max-width="25" width="25">'+
										      	          				'</div>'+
										      	          			'</div>'+
										      	          		'</td>'+
							      	            			'</tr>'+
							      	            		'</table>'+
							      	            	'</td>'+
							      	        	'</tr>'+
							      	        	'<tr>'+
							      	        		'<td height="10">'+
							      	        		'</td>'+
							      	        	'</tr>'+
							      	        	'<tr>'+
							      	        		'<td align="center">'+
							      	        			'<table align="center" border="0" cellpadding="0" cellspacing="0" width="290" style="background-color: #F2F2F2;">'+
							      	            			'<tr>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentTextEditable">'+
							      	            						'<div class="contentEditable">'+
							      	            							'<p>'+
							      	            								'<a target="_blank" href="[CLIENTS.WEBSITE]" style="text-align:center; text-decoration:none; color: #747474; font-size: 12px;">Visit website</a>'+
							      	            							'</p>'+
							      	            						'</div>'+
							      	            					'</div>'+
							      	            				'</td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td width="20"></td>'+
							      	            				'<td>'+
							      	            					'<div class="contentEditableContainer contentTextEditable">'+
							      	            						'<div class="contentEditable">'+
							      	            							'<p>'+
							      	            								'<a target="_blank" href="[FORWARD]" style="text-align:center; text-decoration:none; color: #747474; font-size: 12px;">Forward to a Friend</a>'+
							      	            							'</p>'+
							      	            						'</div>'+
							      	            					'</div>'+
							      	            				'</td>'+
							      	            			'</tr>'+
							      	            		'</table>'+
							      	        		'</td>'+
							      	        	'</tr>'+
							      	        	'<tr>'+
							      	        		'<td height="20">'+
							      	        		'</td>'+
							      	        	'</tr>'+
							      	        '</table>'+
							      	    '</div>'+
								  	'</td>'+
								'</tr>'+
							'</table>'+

						'</body>'+
					'</html>';


		break;

	}

	return HTML;
}

module.exports = 
{
	buildTemplate	
}