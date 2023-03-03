const signin = "https://webathon-backend.onrender.com/api/auth/login";
const signup = "https://webathon-backend.onrender.com/api/auth/signup";
const my_cps =
  "https://webathon-backend.onrender.com/api/comp/getMyCompetitions/";
const req_cps =
  "https://webathon-backend.onrender.com/api/comp/showMyRequests/";
const postComp =
  "https://webathon-backend.onrender.com/api/comp/createCompetition";
const applyComp =
  "https://webathon-backend.onrender.com/api/comp/applyCompetition"
const acceptComp =
  "https://webathon-backend.onrender.com/api/comp/acceptCompetition"
const compStatus = 
"https://webathon-backend.onrender.com/api/comp/compStatus/"
let removeComp = 
"https://webathon-backend.onrender.com/api/comp/removeCompetition"
let showReq = 
"https://webathon-backend.onrender.com/api/comp/showMyRequests/"
let viewApp=
"https://webathon-backend.onrender.com/api/auth/getById/"
let delComp=
"https://webathon-backend.onrender.com/api/comp/deleteCompetition/"

export {
  my_cps,
  signin,
  signup,
  postComp,
  req_cps,
  applyComp,
  acceptComp,
  compStatus,
  removeComp,
  showReq,
  delComp,
  viewApp
};
