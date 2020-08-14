# Ticketing

A project for learning the microservices architechture made with TypeScript, Next.js, Node.js, MongoDB, Redis & NATS Streaming Server.

## Installing ingress-nginx

#### Run this command

```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/nginx-0.30.0/deploy/static/mandatory.yaml
```

## For Google Cloud (GC)

#### Also run this commant

```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/nginx-0.30.0/deploy/static/provider/cloud-generic.yaml
```

## Load Balancer

#### Take the IP Address of the auto generated Load Balancer from the GC platform and change

#### your host file

##### windows

```
C:\Windows\System32\drivers\etc
```

##### mac / linux

```
/etc/hosts
```

## Build and Run on GC

#### On the root folder run in terminal

```
skaffold dev
```

## If you get this error

```
exiting dev mode because first build failed: couldn't build "gcr.io/ticketing-dev-286319/auth": getting cloudbuild client: google: could not find default credentials. See https://developers.google.com/accounts/docs/application-default-credentials for more information.
```

### Run in terminal

```
gcloud auth application-default login
```

## Setup kubernetes env variables

#### run in terminal

```
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf
```

kubectl create secret generic {k8s var name} --from-literal={VAR_KEY}={VAR_VALUE}
