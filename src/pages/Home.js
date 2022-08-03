import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div><div id="home" class="banner">
		<div class="banner-info">
			<div class="container">
				<div class="col-md-4 header-left">
					<img src="images/IMG_0405.jpeg" alt=""/>
				</div>
				<div class="col-md-8 header-right">
					<h2>Hello</h2>
					<h1>I'm Salman Hussain</h1>
					<h6>Web Designer and Developer</h6>
					<ul class="address">
						<li>
							<ul class="address-text">
								<li><b>D.O.B</b></li>
								<li>11-05-1995</li>
							</ul>
						</li>
						<li>
							<ul class="address-text">
								<li><b>PHONE </b></li>
								<li>+91 9703783624</li>
							</ul>
						</li>
						<li>
							<ul class="address-text">
								<li><b>ADDRESS </b></li>
								<li> Hyderabad, India.</li>
							</ul>
						</li>
						<li>
							<ul class="address-text">
								<li><b>E-MAIL </b></li>
								<li><a href="mailto:example@mail.com"> salmanhussainsh95@gmail.com</a></li>
							</ul>
						</li>
						<li>
							<ul class="address-text">
								<li><b>WEBSITE </b></li>
								<li><a href="http://w3layouts.com">www.selfprojects.</a></li>
							</ul>
						</li>
					</ul>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
	</div>
    <div class="top-nav wow">
		<div class="container">
			<div class="navbar-header logo">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					Menu
				</button>
			</div>
		
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<div class="menu">
					<ul class="nav navbar">
						<li><a href="#about" class="scroll">About</a></li>
						<li><a href="#work" class="scroll">Experience</a></li>
						<li><a href="#education" class="scroll">Education</a></li>
						<li><a href="#skills" class="scroll">Skills</a></li>
						<li><a href="#projects" class="scroll">My Projects</a></li>
						<li><a href="#contact" class="scroll">Contact</a></li>
					</ul>
					<div class="clearfix"> </div>
				</div>
			</div>
		</div>
	</div>
    <div id="about" class="about">
		<div class="container">
			<h3 class="title"> About Me</h3>
			<div class="col-md-8 about-left">
				<p>My Name is Salman Hussain and im from Hyderabad . i completed my bachelors in engineering in 2017.</p>
				<p>I have a good sound of knowledge in Frontend technologies like Html,Css,javascript,bootsrap and React js. I also know about backend language like java,jsp.
                even though i have knowledge in Devops tools like Github.Docker.jenkins and Kubernetes.Hands on experinced in how to deploy projects in server,making the CI/CD pipelines.
                work in pushing and pulling request in source version control system like Github tool </p>
			</div>
			<div class="col-md-4 about-right">
				<ul>
					<h5>Awards</h5>
					<li><span class="glyphicon glyphicon-menu-right"></span> Awarded fpr completing the engineering with no backlogs</li>
					<li><span class="glyphicon glyphicon-menu-right"></span> participated in english language event organised by US embassy</li>
					<li><span class="glyphicon glyphicon-menu-right"></span> winner in cricket tournament at college</li>
				
				</ul>
				<div class="clearfix"> </div>
			</div>
			<div class="clearfix"> </div>
		</div>
	</div>
    <div id="work" class="work">
		<div class="container">
			<h3 class="title">Work Experience</h3>
			
			<div class="work-info"> 
				<div class="col-md-6 work-right work-right2"> 
					<h4>2020 - 20 </h4>
				</div>
				<div class="col-md-6 work-left work-left2"> 
					<h5> Company Name <span class="glyphicon glyphicon-briefcase"> </span></h5>
					<p>Horizons Applications Software Solutions </p>
				</div>
				<div class="clearfix"> </div>
			</div>
		
		</div>
	</div>
    <div id="education" class="education">
		<div class="container">
			<h3 class="title">Education</h3>
			<div class="work-info"> 
				<div class="col-md-6 work-left"> 
					<h4>Bachelors Degree - 2017</h4>
				</div>
				<div class="col-md-6 work-right"> 
					<h5><span class="glyphicon glyphicon-education"> </span> University Name</h5>
					<p>VIF College Of Engineering & Technology </p>
				</div>
				<div class="clearfix"> </div>
			</div>
			<div class="work-info"> 
				<div class="col-md-6 work-right work-right2"> 
					<h4>Intermediate - 2013</h4>
				</div>
				<div class="col-md-6 work-left work-left2"> 
					<h5> University Name <span class="glyphicon glyphicon-education"></span></h5>
					<p>Nava Chaitanya Junior College  </p>
				</div>
				<div class="clearfix"> </div>
			</div>
			<div class="work-info"> 
				<div class="col-md-6 work-left"> 
					<h4>SSC - 2011</h4>
				</div>
				<div class="col-md-6 work-right"> 
					<h5><span class="glyphicon glyphicon-education"> </span> University Name</h5>
					<p>Modern High School </p>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
	</div>
    <div id="skills" class="skills">
		<div class="container">
			<h3 class="title">Skills</h3>
			<div class="skills-info">
				<div class="col-md-6 bar-grids">
					<h6>HTML/CSS  <span> 80% </span></h6>
					<div class="progress">
						<div class="progress-bar progress-bar-striped active" style={{"width": "80%"}}>
						</div>
					</div>
					<h6>Javascript<span> 70% </span></h6>
					<div class="progress">
						<div class="progress-bar progress-bar-striped active" style={{"width": "70%"}}>
						</div>
					</div>
					<h6>React js<span>90% </span></h6>
					<div class="progress">
						<div class="progress-bar progress-bar-striped active" style={{"width": "90%"}}>
						</div>
					</div>
					<h6>Devops Tools<span> 75% </span></h6>
					<div class="progress">
						<div class="progress-bar progress-bar-striped active" style={{"width": "75%"}}>
						</div>
					</div>
				</div>
				<div class="col-md-6 bar-grids">
					<h6>Jenkins<span> 85% </span></h6>
					<div class="progress">
						<div class="progress-bar progress-bar-striped active" style={{"width": "85%"}}>
						</div>
					</div>
					<h6>Dockers<span> 95% </span></h6>
					<div class="progress">
						<div class="progress-bar progress-bar-striped active" style={{"width": "95%"}}>
						</div>
					</div>
					<h6>Kubernetes<span>80% </span></h6>
					<div class="progress">
						<div class="progress-bar progress-bar-striped active" style={{"width": "80%"}}>
						</div>
					</div>
					<h6>Github<span> 60% </span></h6>
					<div class="progress">
						<div class="progress-bar progress-bar-striped active" style={{"width": "60%"}}>
						</div>
					</div>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
	</div>
    <div class="welcome contact" id="contact">
		<div class="container">
			<h3 class="title">Contact Us</h3>
			<div class="contact-row">
				<div class="col-md-6 contact-left">
                
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250261.21285550427!2d-60.42919264432581!3d46.13039392716506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b67ef033cc4082f%3A0xbf0517bb7d9ecd34!2sNorth+Sydney%2C+NS%2C+Canada!5e0!3m2!1sen!2sin!4v1460613320469"></iframe>
				</div>
				<div class="col-md-6 contact-right">
					<div class="address-left">
						<p>Hyderabad,T.S, India </p>
					</div>
					<div class="address-right">
						<p>Call us :+91 9703783624</p>
						<p>E-mail : <a href="mailto:info@example.com">salmanhussainsh95@gmail.com</a></p>
					</div>
					<div class="clearfix"></div>
					<div class="contact-form">
						<form action="#" method="post"/>
							<input type="text" name="Name" placeholder="Name" required=""/>
							<input class="email" name="Email" type="text" placeholder="Email" required=""/>
							<input class="phone" name="phone" type="text" placeholder="Phone" required=""/>
							<textarea name="Message" placeholder="Message" required=""></textarea>
							<input type="submit" value="SUBMIT" />
						
					</div>
				</div>
				<div class="clearfix"></div>
			</div>
		</div>
	</div>
    <div class="footer">
		<div class="container">
			<p>© 2022 My Resume. All rights reserved | Design by <a href="http://salmanhussain.com">Salman Hussain</a></p>
		</div>
	</div>
    </div>
    )
  }
}
