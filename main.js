// /* ==========================================================================
//      2. MULTI-STEP LEAD FORM
//      ========================================================================== */
//      let currentStep = 0;
//      const form = document.getElementById("ptLeadForm");
//      const steps = document.querySelectorAll(".form-step");
//      const nextBtn = document.getElementById("nextBtn");
//      const prevBtn = document.getElementById("prevBtn");
//      const submitBtn = document.getElementById("submitBtn");
//      const progressBar = document.querySelector(".progress-bar");
//      const stepText = document.querySelector(".step-counter");
   
//      function showStep(index) {
//        steps.forEach((step, i) => {
//          step.classList.toggle("active", i === index);
//          step.classList.toggle("hidden", i !== index);
//        });
   
//        if (progressBar) progressBar.style.width = `${((index + 1) / steps.length) * 100}%`;
//        if (stepText) stepText.textContent = `Step ${index + 1} of ${steps.length}`;
   
//        // Visibility management
//        if (index === 0) {
//          prevBtn.classList.add("invisible");
//        } else {
//          prevBtn.classList.remove("invisible");
//        }
   
//        if (index === steps.length - 1) {
//          nextBtn.classList.add("hidden");
//          submitBtn.classList.remove("hidden");
//        } else {
//          nextBtn.classList.remove("hidden");
//          submitBtn.classList.add("hidden");
//        }
       
//        // Improved Scroll: Only scrolls if the form top is out of view
//        const formRect = form.getBoundingClientRect();
//        if (formRect.top < 0) {
//          form.scrollIntoView({ behavior: "smooth", block: "start" });
//        }
//      }
   
//      function isStepValid() {
//        const inputs = steps[currentStep].querySelectorAll("input, select");
//        let valid = true;
//        inputs.forEach(input => {
//          if (input.hasAttribute("required") && !input.value.trim()) {
//            input.style.borderColor = "var(--c-red)";
//            valid = false;
           
//            // NEW: Remove error border as soon as user fixes it
//            input.addEventListener('input', () => {
//              if (input.value.trim()) input.style.borderColor = "var(--border)";
//            }, { once: true });
           
//          } else {
//            input.style.borderColor = "var(--border)";
//          }
//        });
//        return valid;
//      }
   
//      if (nextBtn && prevBtn) {
//        nextBtn.addEventListener("click", () => {
//          if (isStepValid()) {
//            currentStep++;
//            showStep(currentStep);
//          }
//        });
   
//        prevBtn.addEventListener("click", () => {
//          if (currentStep > 0) {
//            currentStep--;
//            showStep(currentStep);
//          }
//        });
//      }
   
//      if (form) {
//       form.addEventListener("submit", async (e) => {
//         e.preventDefault(); // Prevent page reload
      
//         // Final validation check
//         if (!isStepValid()) return;
      
//         // 1. UI Feedback: Change button state
//         submitBtn.disabled = true;
//         submitBtn.textContent = "Architecting Your Map...";
      
//         // 2. Collect Data from all steps
//         const formData = new FormData(form);
//         const data = Object.fromEntries(formData.entries());
      
//         // Add a timestamp and source for better CRM tracking
//         data.submission_time = new Date().toISOString();
//         data.source = "Website Diagnostic Form";

//         // 🔍 DEBUG LOG
// console.log("📦 Data Object:", data);

//         try {
//           // 3. Send Data to Zapier
//           const response = await fetch("https://hooks.zapier.com/hooks/catch/23918850/ujtjm2p/", {
//             method: "POST",
//             body: JSON.stringify(data),
//             // headers: {
//             //   "Content-Type": "application/json"
//             // }
//           });
      
//           if (response.ok) {
//             // 4. Success State: Show the user a high-end confirmation
//             showSuccessState(data.name);
//           } else {
//             throw new Error("Zapier connection failed");
//           }
//         } catch (error) {
//           console.error("Submission Error:", error);
//           submitBtn.disabled = false;
//           submitBtn.textContent = "Try Again";
//           alert("Something went wrong. Please try again or message us via WhatsApp.");
//         }
//       });
      
//       // Helper function to swap form content for a success message
//       function showSuccessState(userName) {
//         // Smoothly scroll to the top of the form area
//         form.scrollIntoView({ behavior: "smooth", block: "center" });
      
//         form.innerHTML = `
//           <div class="success-message" style="text-align: center; padding: 4rem 1rem; animation: formFadeIn 0.5s ease forwards;">
//             <div style="font-size: 3.5rem; margin-bottom: 1.5rem;">⚙️</div>
//             <h2 style="color: var(--c-blue); font-size: 1.8rem; margin-bottom: 1rem;">Analysis Underway</h2>
//             <p style="color: var(--text); line-height: 1.6; font-size: 1.1rem; max-width: 400px; margin: 0 auto;">
//               Thanks, <strong>${userName}</strong>. <br><br>
//               Our system is now analyzing your requirements and territory competition. <br><br>
//               Your <strong>Lead System Map</strong> will be sent to your inbox shortly.
//             </p>
//           </div>
//         `;
//       }
//      }

/* ==========================================================================
   MULTI-STEP LEAD FORM (STABLE ZAPIER VERSION)
   ========================================================================== */

   let currentStep = 0;

   const form = document.getElementById("ptLeadForm");
   const steps = document.querySelectorAll(".form-step");
   
   const nextBtn = document.getElementById("nextBtn");
   const prevBtn = document.getElementById("prevBtn");
   const submitBtn = document.getElementById("submitBtn");
   
   const progressBar = document.querySelector(".progress-bar");
   const stepText = document.querySelector(".step-counter");
   
   /* =========================
      STEP NAVIGATION
      ========================= */
   
   function showStep(index) {
     steps.forEach((step, i) => {
       step.classList.toggle("active", i === index);
       step.classList.toggle("hidden", i !== index);
     });
   
     if (progressBar) {
       progressBar.style.width = `${((index + 1) / steps.length) * 100}%`;
     }
   
     if (stepText) {
       stepText.textContent = `Step ${index + 1} of ${steps.length}`;
     }
   
     if (prevBtn) {
       if (index === 0) prevBtn.classList.add("invisible");
       else prevBtn.classList.remove("invisible");
     }
   
     if (nextBtn && submitBtn) {
       if (index === steps.length - 1) {
         nextBtn.classList.add("hidden");
         submitBtn.classList.remove("hidden");
       } else {
         nextBtn.classList.remove("hidden");
         submitBtn.classList.add("hidden");
       }
     }
   
     if (form && form.getBoundingClientRect().top < 0) {
       form.scrollIntoView({ behavior: "smooth", block: "start" });
     }
   }
   
   /* =========================
      VALIDATION
      ========================= */
   
   function isStepValid() {
     const step = steps[currentStep];
     if (!step) return false;
   
     const inputs = step.querySelectorAll("input, select");
     let valid = true;
   
     inputs.forEach(input => {
       if (input.hasAttribute("required") && !input.value.trim()) {
         input.style.borderColor = "var(--c-red)";
         valid = false;
   
         input.addEventListener(
           "input",
           () => {
             if (input.value.trim()) {
               input.style.borderColor = "var(--border)";
             }
           },
           { once: true }
         );
       } else {
         input.style.borderColor = "var(--border)";
       }
     });
   
     return valid;
   }
   
   /* =========================
      STEP BUTTONS
      ========================= */
   
   if (nextBtn && prevBtn) {
     nextBtn.addEventListener("click", () => {
       if (isStepValid()) {
         currentStep++;
         showStep(currentStep);
       }
     });
   
     prevBtn.addEventListener("click", () => {
       if (currentStep > 0) {
         currentStep--;
         showStep(currentStep);
       }
     });
   }
   
   /* =========================
      SUBMIT (ZAPIER SAFE)
      ========================= */
   
   if (form) {
     form.addEventListener("submit", async (e) => {
       e.preventDefault();
   
       if (!isStepValid()) return;
   
       if (submitBtn) {
         submitBtn.disabled = true;
         submitBtn.textContent = "Architecting Your Map...";
       }
   
       const formData = new FormData(form);
   
       // Build flat object
       const data = Object.fromEntries(formData.entries());
   
       data.submission_time = new Date().toISOString();
       data.source = "Website Diagnostic Form";
   
   
       // IMPORTANT: Zapier Tables SAFE FORMAT (query string)
       const params = new URLSearchParams();
   
       Object.entries(data).forEach(([key, value]) => {
         params.append(key, value);
       });
   
       const url =
         "https://hooks.zapier.com/hooks/catch/23918850/ujtjm2p/?" +
         params.toString();
   
   
       try {
         await fetch(url, {
           method: "POST"
         });
   
         showSuccessState(data.name || "there");
       } catch (error) {
         console.error("Submission Error:", error);
   
         if (submitBtn) {
           submitBtn.disabled = false;
           submitBtn.textContent = "Try Again";
         }
   
         alert(
           "Something went wrong. Please try again or contact us on WhatsApp."
         );
       }
     });
   }
   
   /* =========================
      SUCCESS UI
      ========================= */
   
   function showSuccessState(userName) {
     if (!form) return;
   
     form.scrollIntoView({ behavior: "smooth", block: "center" });
   
     form.innerHTML = `
       <div class="success-message" style="text-align: center; padding: 4rem 1rem; animation: formFadeIn 0.5s ease forwards;">
         <div style="font-size: 3.5rem; margin-bottom: 1.5rem;">⚙️</div>
         <h2 style="color: var(--c-blue); font-size: 1.8rem; margin-bottom: 1rem;">
           Analysis Underway
         </h2>
         <p style="color: var(--text); line-height: 1.6; font-size: 1.1rem; max-width: 400px; margin: 0 auto;">
           Thanks, <strong>${userName}</strong>.<br><br>
           Our system is now analyzing your requirements and competition.<br><br>
           Your <strong>Lead System Map</strong> will be sent to your inbox shortly.
         </p>
       </div>
     `;
   }