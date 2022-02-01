## Deploying service through templates

### Folder Structure
The templates dir have further environment relevant sub dirs 
for example, ```templates/dev``` will have all the templates required for dev enviroment

In every environment related directory all of the yaml based templates are present required to spin up the specific service


## Creating, Deleting resources
### Make sure you have oc cli tool running with required project selected

#### Steps
- go into the templates
- to create objects run ```$ oc create -f dev/``` to deploy all of the dev related objects
- to delete objects run ```$ oc delete -f dev/``` to delete all of the dev related objects
