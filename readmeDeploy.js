/*  

How to deploy a website ?
(see img dlp1im)
ans-- deploy could b either in fronmtend or backend 
-- for the frontend deployment , we have static hosts and HTML hosting 
-- for the frontend+backend or anywhere there is backend there 
servers+cloud hosting+ VPS(virtual private service)  is required
 
-- now , Backend hosting coulnt be done  for free vbeacuse it requires CPU+RAM+Disk+bandwidth
whereas frontend deploying only requires bandwidth ... 
maximum space it could use , it could be 10MB.as it is only HTML+JS+CSS code. 


==> Bare metal 
==> Infrastructure as a service (Iaas)
types of Iaas services:
AWS-- amazon web services
GCE-- Google clouyd Engine 
Digital ocean

(see img Iaas2)
PLATFORM AS A SERVICE::
-- we are a virtual computer , the computer has Ubuntu+Node.js+npm installed in it
u just provide us a Git repo , we will clone 
-- then we will npm install
-- our responsibility is just to manage the source code
-- put it into git , the service providers , they put it into the git 
-- they install and they run it .
-- this type of service is known as Platform as a service(Paas)

-- in Paas, all the things exits like Os and all 
example : Heroku
we will give the source code to heroku and it will run our code.

-- on Github also , if u publish ur frontend code , github can host frontend for u 
coding blocks is actually hosted on github only..
-- if we goto hackerblocks.com or online.codingblocks.com, they are Iaas-- means they are bot servers on cloud 


-- lets say we we start with frontend only website..
-- create an index.html  page 
-- i made a repository called" sample deploy frontend"
uploaded to github

==> next step:
-- goto settings --> goto github pages(see img githubpgim)-> source (select master branch)-> save


naming convention is like :
-->
if we have github.com, user ame is x , repository name is Y,
site becomes available on "x.github.io/y"
this is the hoted site:
https://breakmycode.github.io/sampledeployfront/.

-- also we can buy domain name example : goDaddy.com


-- for custom domain  --- (see cloudfare on google )
can read this article ;;
(https://help.github.com/en/articles/using-a-custom-domain-with-github-pages)
w1.samples.breakmycode.in
--it wont open bcs we have not provided it to the Github

for this (see dnsrecords)
-- note that usually , the DNS get hosted after a couple of time ..

ques-- what is the point in domain name ? cant we use it directly hosted by  the github>
ans -  when u buy a dm from go daddy .. some of the money u give to buy the domain name 
 and some money for the hosting part .... just leave for hostiong partr 
 and github is actually free ,... all the traffic would be managed ..
 amiunt is generally 800/ year for the domain name 
 --we can host from Dropbox, github also .. instead opf go daddy beacause godaddy hosting is usuaaly slow 
(till 34 mins)





Question-- how is the payment done in codingblocks.com page?
ans

it is a static website 

goto inspect where u goto the payment 
we will see an iframe
payment widget is from a different website .. it has been inserted 
in the form of an iframe..  




==> lets now see the hostin g from the backend also 

ans 

  heroku allows us to host websites cretaed from node.js  , python 
  or ruby , php, java ---   we can see supports in heroku sites ..


--make one repo 
-- login the heroku
 connect to the heroku   
-- heroku apps:create webi18
(this webi 18 is just the simply the name i hacve given)
it displayed me this 
--https://webi18.herokuapp.com/ | https://git.heroku.com/webi18.git


now type thi command:
    $ git remote
heroku
origin

(it shows us two remotes now )




-- git push heroku master
(we will see that it doesnt run, we will also see that what changes do wehave to make)

-- heroku logs 
webserver startes and all the things we see that sare written 




-- now goto  https://webi18.herokuapp.com/ 
we will see that connection will time out and heroku will not load anything

-- this happens because heroku does not wants us to load ur apps on any custom port u want to
-- heroku provides its own port for its security reasons..
-- it allocates a port and we have to use that 



-- now goto Server.js and do some changes
/IS PORT ENV VARIABLE IS SET  i will take its value , else i wil take  3334,
// also in app.Listen we will use SERVER_PORT









*/