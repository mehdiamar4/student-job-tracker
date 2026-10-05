variable "aws_region" {
  description = "AWS region in which to create the instance."
  type        = string
  default     = "eu-central-1"
}

variable "instance_type" {
  description = "EC2 instance type for the Docker Compose host."
  type        = string
  default     = "t3.micro"
}

variable "ssh_key_name" {
  description = "Name of an existing EC2 key pair used for SSH access."
  type        = string
}

variable "ssh_allowed_cidr" {
  description = "CIDR block allowed to connect over SSH, for example 203.0.113.10/32."
  type        = string
}
