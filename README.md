# Ticketing

This is the code from a tutorial for microservices with nodejs

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
