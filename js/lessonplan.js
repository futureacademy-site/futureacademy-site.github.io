			const grade1Btn = document.querySelector("#grade1Btn");
			const grade2Btn = document.querySelector("#grade2Btn");
			const grade3Btn = document.querySelector("#grade3Btn");
			const displayLesson = document.querySelector("#displayLesson");
			const lessonplanTitle = document.querySelector(".ls-title");
			const search = document.querySelector("#search-input");
			let gradeFilterr;
			let htmlResult;

			grade1Btn.addEventListener('click', event => {
				grade1Btn.classList.add("selected-g");
				grade2Btn.classList.remove("selected-g");
				grade3Btn.classList.remove("selected-g");
				lessonplanTitle.innerHTML="Lesson for Grade 1";
				search.value = "";
				displayLesson.innerHTML = "";


				gradeFilterr = students.filter(students => students.grade === 1);

				display();

			});

			grade2Btn.addEventListener('click', event => {

				grade2Btn.classList.add("selected-g");
				grade1Btn.classList.remove("selected-g");
				grade3Btn.classList.remove("selected-g");
				lessonplanTitle.innerHTML="Lesson for Grade 2";
				displayLesson.innerHTML = "";
				search.value = "";

				gradeFilterr = students.filter(students => students.grade === 2);
				display();

			});
			grade3Btn.addEventListener('click', event => {
				grade3Btn.classList.add("selected-g");
				grade1Btn.classList.remove("selected-g");
				grade2Btn.classList.remove("selected-g");
				lessonplanTitle.innerHTML="Lesson for Grade 3";
				displayLesson.innerHTML = "";
				search.value = "";

				gradeFilterr = students.filter(students => students.grade === 3);
				display();
		
			});

			
			search.addEventListener('keyup', event => {
				displayLesson.innerHTML = "";
				if(search.value === ""){
					display();
				}else{
					
					let searchfilter = gradeFilterr.filter(gradeFilterr => gradeFilterr.title.toLowerCase().includes(search.value.toLowerCase()));
					
					if(searchfilter.length === 0){
						displayLesson.insertAdjacentHTML('beforeend','<p style="text-align:center">No result Found</p>');
					}else{
						for(let i = 0; i < searchfilter.length; i++){

						  	htmlResult = '<div class="row"><div class="col-lg-8 col-md-8 col-12"><div class="embed-responsive embed-responsive-16by9"><iframe src="'+searchfilter[i].pptLink+'" frameborder="0" class="embed-responsive" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></div></div><div class="col-lg-4 col-md-4 col-12 info-columns order-md-1"><h4>Title: '+searchfilter[i].title+'</h4><p>Prepared by: '+searchfilter[i].owner+'</p><a href="'+searchfilter[i].pptDownload+'" class="btn-download">Download Presentation</a></div></div>';

							displayLesson.insertAdjacentHTML('beforeend',htmlResult);
						}
					}
				}

			});	


			function display() {
				for(let i = 0; i < gradeFilterr.length; i++){

					htmlResult = '<div class="row"><div class="col-lg-8 col-md-8 col-12"><div class="embed-responsive embed-responsive-16by9"><iframe src="'+gradeFilterr[i].pptLink+'" frameborder="0" class="embed-responsive" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></div></div><div class="col-lg-4 col-md-4 col-12 info-columns order-md-1"><h4>Title: '+gradeFilterr[i].title+'</h4><p>Prepared by: '+gradeFilterr[i].owner+'</p><a href="'+gradeFilterr[i].pptDownload+'" class="btn-download">Download Presentation</a></div></div>';

						displayLesson.insertAdjacentHTML('beforeend',htmlResult);
					}
			}
					

			grade1Btn.click();