const Form = () => {
    return (
    <>
    <div class="container-sm "id="myDiv">
		<form id="myform" style="width:50%; margin: 0 auto;" action="submissionPage.php" autocomplete="off" method="post">
			<div class="mb-0">
				<label for="name" class="form-label">Full Name</label>
				<input id="name" class="form-control" name="name" type="text" style="width:100%"/>
			</div>
			<br/>
			<div class="mb-0">
				<label for="cont" class="form-label">Contact</label>
				<input id="cont" class="form-control" type="text" name="cont" style="width:100%"/>
			</div>
            <br/>
			<div class="mb-0">
				<label for="email" class="form-label">Email Address</label>
				<input id="email" class="form-control" type="text" name="email"style="width:100%"/>
			</div>
            <br/>
			<div class="mb-0">
				<label for="age" class="form-label">Age</label>
				<input id="age" class="form-control" type="number" name="age" style="width:100%"/>
			</div>
            <br/>
			<div class="mb-0">
				<label for="date" class="form-label">Date of Performance</label>
				<input type="date" class="form-control" id="date" name="date" style="width:100%"/>
			</div>
            <br/>
			<input type="submit" class="btn btn-success" value="Submit"/>
		</form>
	</div>
    </>
    )
};

export default Services;